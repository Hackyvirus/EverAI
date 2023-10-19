import 'dotenv/config'
import express from "express";
import OpenAI from 'openai';
import bodyParser from "body-parser";
import translate from 'node-google-translate-skidz';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
async function translateToMarathi(text) {
  return new Promise((resolve, reject) => {
    translate({
      text,
      source: 'en',
      target: 'mr'
    }, (result) => {
      if (result.translation) {
        resolve(result.translation);
      } else {
        console.error("Translation error:", result);
        reject("Translation error");
      }
    });
  });
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/login.html");
});

app.post("/", (req, res) => {
  res.sendFile(__dirname + "/views/");
});


app.post("/kaushik", (req, res) => {
  var question = req.body.myInput;
  async function mainfuck() {
    const openai = new OpenAI({ apiKey: process.env.apiKey })
    let answer = await openai.chat.completions.create({
      messages: [{ role: "assistant", content: question }],
      model: 'gpt-3.5-turbo',
      max_tokens: 4000,
      temperature: 0
    })
    const answer2 = answer.choices[0].message.content
    res.render("chat", { name: question, answer: answer2 });

  }
  mainfuck()

});

app.post("/sushant", (req, res) => {
  var question = req.body.myInput;
  async function mainfuck() {
    const openai = new OpenAI({ apiKey: process.env.apiKey })
    let answer = await openai.chat.completions.create({
      messages: [{ role: "assistant", content: question }],
      model: 'gpt-3.5-turbo',
      max_tokens: 4000,
      temperature: 0
    })
    const answer1 = answer.choices[0].message.content
    try {
      const marathiAnswer = await translateToMarathi(answer1);
      res.render("chat", { name: question, answer: marathiAnswer });
    }
    catch (error) {
      console.log(error);
    }
  }
  mainfuck()

});


app.post("/", (req, res) => {
  res.sendFile(__dirname + "/views/");
});

app.use(express.static(__dirname + '/views/'));

app.listen(process.env.PORT || 4000, () => {
  console.log("Server is started on port " + process.env.PORT);
});
