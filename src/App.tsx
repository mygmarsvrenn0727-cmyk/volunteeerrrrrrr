import { useState } from "react";
import { categories, looks, jobs as startJobs, Job } from "./data";

export default function App() {
  const [jobs, setJobs] = useState<Job[]>(startJobs);
  const [filter, setFilter] = useState("Бүгд");
  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(false);


  const [joinJob, setJoinJob] = useState<Job | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [joinedIds, setJoinedIds] = useState<number[]>([]);


  const [showAdd, setShowAdd] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [place, setPlace] = useState("");
  const [category, setCategory] = useState("Байгаль");
  const [other, setOther] = useState("");


  const shown = jobs.filter((job) => {
    const okCategory = filter === "Бүгд" || job.category === filter;
    const okSearch = (job.title + job.place).toLowerCase().includes(search.toLowerCase());
    return okCategory && okSearch;
  });

  function join() {
    if (name === "" || phone === "") {
      alert("Нэр, утсаа оруулна уу");
      return;
    }
    
    setJoinedIds([...joinedIds, joinJob!.id]);
    setJoinJob(null);
    setName("");
    setPhone("");
  }

  function addJob() {
    if (title === "") {
      alert("Ажлын нэрээ оруулна уу");
      return;
    }
    const newJob: Job = {
      id: Date.now(),
      title: title,
      category: category,
      other: category === "Бусад" ? other : "",
      date: date || "Удахгүй",
      place: place || "Улаанбаатар",
      count: 0,
    };
    setJobs([newJob, ...jobs]);
    setFilter("Бүгд");
    setShowAdd(false);
    setTitle("");
    setDate("");
    setPlace("");
    setOther("");
    setCategory("Байгаль");
  }

  return (
    <div className={dark ? "dark-mode" : ""}>
      <header>
        <div className="logo">Volunteer</div>
        <div className="search">
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Арга хэмжээ хайх..." />
        </div>
        <button className="dark" onClick={() => setShowAdd(true)}>+ Сайн дурын ажил нэмэх</button>
        <button className="tg" onClick={() => setDark(!dark)}>◐</button>
      </header>

      <main>
        <h1>Танд зориулсан</h1>

        <div className="chips">
          {["Бүгд", ...categories].map((c) => (
            <button key={c} className={c === filter ? "chip on" : "chip"} onClick={() => setFilter(c)}>
              {c}
            </button>
          ))}
        </div>

        <div className="grid">
          {shown.length === 0 && <div className="empty">Илэрц олдсонгүй</div>}

          {shown.map((job) => {
            const joined = joinedIds.includes(job.id);
            return (
              <div className="card" key={job.id}>
                <div className="ph" style={{ background: job.color || looks[job.category].color }}>
                  {job.emoji || looks[job.category].emoji}
                </div>
                <div className="bd">
                  <h3>{job.title}</h3>
                  {job.other && <div className="meta">🏷 {job.other}</div>}
                  <div className="meta">{job.date}</div>
                  <div className="meta">{job.place}</div>
                  <div className="row">
                    {job.url ? (
                      <>
                        <span className="cnt">{job.url.split("/")[2]}</span>
                        <a className="join" href={job.url} target="_blank" rel="noreferrer">Дэлгэрэнгүй ↗</a>
                      </>
                    ) : (
                      <>
                        <span className="cnt">{(job.count || 0) + (joined ? 1 : 0)} сайн дурын</span>
                        <button className={joined ? "join done" : "join"} onClick={() => !joined && setJoinJob(job)}>
                          {joined ? "Бүртгүүлсэн ✓" : "Оролцох"}
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <footer>Улаанбаатар · Сайн дурынхны нэгдэл</footer>

      {joinJob && (
        <div className="modal">
          <div className="box">
            <h2>Оролцох</h2>
            <div className="meta">{joinJob.title}</div>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Таны нэр" />
            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Утасны дугаар" />
            <button className="dark full" onClick={join}>Бүртгүүлэх</button>
            <button className="x" onClick={() => setJoinJob(null)}>Болих</button>
          </div>
        </div>
      )}

      {showAdd && (
        <div className="modal">
          <div className="box">
            <h2>Сайн дурын ажил нэмэх</h2>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Ажлын нэр" />
            <input value={date} onChange={(e) => setDate(e.target.value)} placeholder="Огноо, цаг (10-р сарын 20, 14:00)" />
            <input value={place} onChange={(e) => setPlace(e.target.value)} placeholder="Байршил" />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            {category === "Бусад" && (
              <input value={other} onChange={(e) => setOther(e.target.value)} placeholder="Юу вэ? Өөрөө бичнэ үү" />
            )}
            <button className="dark full" onClick={addJob}>Нэмэх</button>
            <button className="x" onClick={() => setShowAdd(false)}>Болих</button>
          </div>
        </div>
      )}
    </div>
  );
}
