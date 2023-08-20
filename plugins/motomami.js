let handler = async (m, { conn, text }) => {
  m.reply(`*${pickRandom(global.motomami)}`);
};

handler.tags = ['motomami'];
handler.command = ['motomami'];

export default handler;

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

global.motomami = [
  "🦋 Una motomami te abraza y es mejor que abrazar un peluche*",
  "🦋 Una motomami es leal con los suyos, porque ser leal es un flex*",
  "🦋 Una motomami cuida de otras motomamis*",
  "🦋 A una motomami le gusta la leche*",
  "🦋 Una motomami tiene las manos de mariposa y brazos y cuerpo de mariposa también*",
  "🦋 Una motomami destruye con gusto sus obras anteriores para dar paso a las obras siguientes*",
  "🦋 Una motomami no necesita, la necesitan*",
  "🦋 Una motomami es muy suya y se transforma*",
  "🦋 Una motomami es una leyenda del fitness, pero siempre pide postre*",
  "🦋 Una motomami sabe quién es y lo lleva por delante porque es brava*",
  "🦋 A una motomami no le importa mancharse las manos cuando las pone dentro del motor para ajustarlo*",
  "🦋 No puedes joder con una motomami*",
  "🦋 Frontea con moto, protege a tu mami*",
  "🦋 El casco es el mejor bolso de una motomami*",
  "🦋 Una motomami sabe que el mejor artista es Dios*",
  "🦋 Una motomami dice hoy voy un poco motomami porque se ha bebido unas copillas*",
  "🦋 Una motomami te puede ride como a su bike*",
  "🦋 Si una motomami diseñara tacones, lo haría también del 44*",
  "🦋 Una Motomami tarda lo que se tenga que tardar en hacer un álbum*",
  "🦋 Una motomami no sabe cuando rendirse*",
  "🦋 Una motomami nunca llega tarde, son los demás que llegan muy temprano*",
  "🦋 Una motomami de 10 es un 100*",
  "🦋 Yo soy muy mía, pero hoy soy tuya.*"
];
