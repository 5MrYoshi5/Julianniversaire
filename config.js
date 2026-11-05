window.SITE_CONFIG = {
  date: "2026-11-10",
  title: "Pour Madame parfaite",
  intro: "Joyeux anniversaire, Julia. J'ai caché quelques petites choses ici pour toi. Ouvre-les à ton rythme. 🤍",
  waiting: "Les petites enveloppes apparaîtront au fil de ta journée.",
  signature: "Je t'aime ❤️",
  envelopes: [
    {
      time: "00:00", title: "Un premier petit mot", subtitle: "Pour commencer ta journée",
      kind: "text", content: `<p>Joyeux anniversaire ma Julia ❤️</p><p>J'espère que tu vas commencer cette journée avec le sourire. Aujourd'hui, c'est ta journée, alors laisse-moi te rappeler à quel point tu comptes pour moi.</p><p>Je suis vraiment heureux de t'avoir dans ma vie. Même à distance, tu arrives à rendre mes journées beaucoup plus belles. </p>`
    },
    {
      time: "08:00", title: "Une pensée pour toi", subtitle: "Juste parce que tu le mérites",
      kind: "text", content: `<p>Petit rappel du matin : tu es incroyable. Et non, ce n'est pas juste moi qui dis ça parce que je suis amoureux.</p><p>J'espère que tu vas passer une journée aussi jolie que toi. Profite bien, ma cherie. 🤍</p>`
    },
    {
      time: "12:00", title: "Nos petits souvenirs", subtitle: "Des moments que je garde précieusement",
      kind: "text", content: `<p>Je repense souvent à toi, nos nuits à jouer à tous les jeux imaginables, puis à finir par s'endormir ensemble au téléphone.</p><p>C'est peut-être tout bête, mais ce sont exactement ces petits moments-là que j'aime. Pas besoin de faire quelque chose d'extraordinaire : tant que je partage un bout de ma journée avec toi, ça me va.</p>`,
    },
    {
      time: "16:00", title: "Est-ce que tu nous connais ?", subtitle: "Un mini quiz rien que pour nous",
      kind: "quiz", questions: [
        { q: "À combien de jeux Fart Game avons-nous joué ?", choices: ["2", "3", "4"], answer: 1, success: "Évidemment. Dont notre grande carrière sur Fart Obby. 😂" },
        { q: "Qu'est-ce qu'on finissait souvent par faire au téléphone ?", choices: ["Chanter", "S'endormir ensemble", "Regarder un film d'action"], answer: 1, success: "Exactement. Et j'espère qu'il y en aura encore plein d'autres. ❤️" },
        { q: "Qui est le ou la meilleur·e sur Fortnite ?", choices: ["Julia", "Adrien", "Kirikou"], answer: 0, success: "C'est toi, bien sûr — mais c'est peut-être parce que ta voix m'hypnotise quand on joue ensemble. ❤️" },
        { q: "Quelle est la meilleure façon de me faire tomber amoureux de toi ?", choices: ["Être ce que tu crois que je veux que tu sois", "Me dire ce que je veux entendre", "Être toi-même"], answer:2, success: "C'est vraiment TOI qui me fais craquer. ❤️" },
        { q: "Quel est ton surnom dans cette petite surprise ?", choices: ["Madame parfaite", "Madame mystère", "La championne"], answer: 0, success: "Madame parfaite, pour toujours. 🤎🤍🩶🖤💜💙🩵💚💛🧡❤️🩷" }
      ]
    },
    {
      time: "20:00", title: "Un petit quelque chose pour toi", subtitle: "Ma promesse aujourd'hui",
      kind: "gift", content: `<p> Je veux te faire un dernier cadeau, un cadeau qui durera pour toujours. Je te promets de faire de mon mieux pour être toujours là pour toi et de toujours t'aimer de tout mon cœur, d'une façon ou d'une autre. </p>`,
    },
    {
      time: "23:59", title: "La dernière enveloppe", subtitle: "À lire tout doucement",
      kind: "text", content: `<p>Et voilà, ma Julia. La journée touche à sa fin, mais j'espère que tu as senti à quel point tu es aimée.</p><p>Je ne sais pas toujours trouver les mots parfaits, alors je vais faire simple : merci d'être toi, merci pour tous nos moments, nos rires, nos appels qui durent trop longtemps et même nos parties de Fart Obby.</p><p>J'ai hâte de continuer à créer plein de souvenirs avec toi.</p><p>Joyeux anniversaire, Madame parfaite. ❤️</p>`
    }
  ]
};
