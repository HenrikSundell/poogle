const translate = async (text, source, target) => {
    const res = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({
            q: text,
            source: source,
            target: target
        }),
        headers: { "Content-Type": "application/json" }
    })
    const json = res.json()
    return json["translatedText"]
}

const translateMulti = async (text, langs) => {
    let curLang = "en";
    let curText = text;
    for (const lang in langs) {
        const newText = await translate(text, curLang, lang);
        curLang = lang;
    };
    return curText;
}

export { translate, translateMulti };