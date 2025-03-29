async function searchWord() {
    const word = document.getElementById("wordInput").value.trim();
    const resultDiv = document.getElementById("result");

    if (word === "") {
        resultDiv.innerHTML = `<p>Please enter a word.</p>`;
        return;
    }

    resultDiv.innerHTML = `<p>Searching...</p>`;

    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await response.json();

        if (!data || data.title === "No Definitions Found") {
            resultDiv.innerHTML = `<p>No definitions found for "${word}". Try another word.</p>`;
            return;
        }

        const meaning = data[0].meanings[0].definitions[0];
        const phonetics = data[0].phonetics.find(p => p.text)?.text || "N/A";
        const example = meaning.example ? `<p class="example">Example: ${meaning.example}</p>` : "";

        resultDiv.innerHTML = `
            <p class="word">${word}</p>
            <p class="pronunciation">Pronunciation: ${phonetics}</p>
            <p class="definition">${meaning.definition}</p>
            ${example}
        `;
    } catch (error) {
        resultDiv.innerHTML = `<p>Error fetching data. Please try again.</p>`;
        console.error(error);
    }
}
