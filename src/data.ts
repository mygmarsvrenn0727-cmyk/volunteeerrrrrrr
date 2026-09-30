export interface Job {
  id: number;
  title: string;
  category: string;
  other?: string; 
  date: string;
  place: string;
  emoji?: string;
  color?: string;
  url?: string; 
  count?: number;
}

export const categories = ["Байгаль", "Хүүхэд", "Тусламж", "Боловсрол", "Амьтан", "Бусад"];


export const looks: { [key: string]: { emoji: string; color: string } } = {
  Байгаль: { emoji: "🌿", color: "#dff5e3" },
  Хүүхэд: { emoji: "🧒", color: "#ffe9d6" },
  Тусламж: { emoji: "🤲", color: "#f9dfe9" },
  Боловсрол: { emoji: "📖", color: "#e4e0fa" },
  Амьтан: { emoji: "🐾", color: "#fff3c9" },
  Бусад: { emoji: "✨", color: "#e8e8ee" },
};

const site = "https://ivolunteer.mn/";


export const jobs: Job[] = [
  {
    id: 5,
    title: "Mongolian Open 2026 · сайн дурын шүүгч",
    category: "Бусад",
    other: "Рубик шоны тэмцээн",
    date: "Албан ёсны нээлттэй тэмцээн · 16+ нас",
    place: "Тэмцээнийг зохион байгуулахад сайн дурын шүүгчээр оролцох",
    emoji: "🧩",
    color: "#e4f0ff",
    url: "https://forms.gle/xumnVGTeDczZ5FvJA",
  },
  {
    id: 6,
    title: "SMART 2026 Volunteer Team",
    category: "Бусад",
    other: "Эвент, маркетинг",
    date: "SMART Creative Festival · бүртгэл эхэллээ",
    place: "Эвент менежмент, маркетингийн бодит туршлага хуримтлуулах",
    emoji: "🎉",
    color: "#fde4f0",
    url: "https://forms.gle/r45V6Paj8FvrLnwV7",
  },
  {
    id: 1,
    title: "COP17 сайн дурын ажилтан",
    category: "Байгаль",
    date: "Зарласан: 2026/05/13",
    place: "Цөлжилттэй тэмцэх НҮБ-ын конвенцын COP17 бага хурал",
    emoji: "🌍",
    url: site + "cop17-%d1%81%d0%b0%d0%b9%d0%bd-%d0%b4%d1%83%d1%80%d1%8b%d0%bd-%d0%b0%d0%b6%d0%b8%d0%bb%d1%82%d0%b0%d0%bd/",
  },
  {
    id: 2,
    title: "Эмнести Интернэшнл Монгол",
    category: "Бусад",
    other: "Хүний эрх",
    date: "Долоо хоногт 2 удаа, 3–4 цаг",
    place: "Улаанбаатар · Ялгаатай байдлыг дэмжигч хүмүүсийг урьж байна",
    emoji: "🕊️",
    color: "#fff3c9",
    url: site + "%d0%b1%d0%be%d0%bb%d0%be%d0%bc%d0%b6-3/",
  },
  {
    id: 3,
    title: "Монголын Дауны холбоо",
    category: "Тусламж",
    date: "Бүртгэл эхэлсэн · 2026/01/17",
    place: "Дауны хам шинжтэй залуусын нийгмийн оролцоо, хөдөлмөр эрхлэлтийг дэмжих төсөл",
    emoji: "💛",
    color: "#ffe9d6",
    url: site + "%d0%b1%d0%be%d0%bb%d0%be%d0%bc%d0%b6-2/",
  },
  {
    id: 4,
    title: "Монголын Эмнести Интернэшнл",
    category: "Бусад",
    other: "Хүний эрх",
    date: "Зарласан: 2026/01/17",
    place: "150 гаруй орны хүний эрх хамгаалагчдын хөдөлгөөн",
    emoji: "🕊️",
    color: "#e4e0fa",
    url: site + "%d0%b1%d0%be%d0%bb%d0%be%d0%bc%d0%b6-1/",
  },
];
