const API_URL = "http://localhost:5000/translate";

const translate = async (text) => {
    const res = await fetch(`${API_URL}?q=text`)
    console.log(res);
    const json = res.json()
    return json["translatedText"]
}

const translateMulti = async (text) => {
    const res = await fetch(`${API_URL}?q=${text}`);
    const newText = await res.text()
    return newText;
}

export { translate, translateMulti };