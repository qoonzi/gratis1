const text = `

Happy 8th Monthsary, Kakak 🤍

Can't believe it's been 8 months already. Time really flies ya kalo dijalaninnya sama orang yang bikin hari-hari jadi lebih special (wlpun sambil prengat prengut banyak). Thank you for being part of my life, for all the laughs, random chats, little arguments, and all the moments we've shared together.

Aku tahu hubungan kita ga selalu perfect, but I really appreciate how we keep choosing each other every day. Makasih udah sabar polllll sama aku yang nyebelin ini, makasih udah dengerin cerita-cerita aku, dan selalu ada pas aku butuh. You make me feel loved, comfortable, and safe in a way that I never expected before.

I hope we can keep growing together, understanding each other better, and creating more memories in the months ahead. No matter what happens, I want us to keep communicating, supporting, and loving each other.

Once again, happy 8th mensiversary, Kakak sayang. Thank you for being you. I'm grateful to have you, and I can't wait to see what our next chapters will look like together. I love you always 🤍

Love regards, yuyu.

`;

let index = 0;

function typeWriter(){

    if(index < text.length){

        document.getElementById("typed-text").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter,40);

    }

}

function openLetter(){

    document.querySelector(".envelope-flap").style.display="none";

    document.querySelector(".letter-content").style.display="block";

    typeWriter();

}
