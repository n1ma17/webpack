
import generateText from "./generateText";
import './styles/main.scss'
import motor from './assets/face.jpg'

document.getElementById('laughImg').src = motor
generateText()
document.getElementById('jokeBtn').addEventListener('click', generateText)