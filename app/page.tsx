import Image from "next/image";

// ===== ข้อมูลร้าน (แก้ตรงนี้) =====
const LINE_ID = "@earthtones"; // TODO: เปลี่ยนเป็น LINE ID จริงของร้าน
const LINE_URL = `https://line.me/R/ti/p/${LINE_ID}`;
const LINKTREE_URL = "https://linktr.ee/earthtones&co";
const OPEN_HOURS = "ทุกวัน 10:00 – 19:00 น."; // TODO: เปลี่ยนเป็นเวลาเปิดจริง
const LOCATION = "กรุงเทพฯ";

const highlights = [
  {
    title: "Eco-Friendly",
    text: "เลือกส่วนผสมจากธรรมชาติ บรรจุภัณฑ์กระดาษคราฟต์ และออกแบบให้ใช้ซ้ำได้ เพื่อลดภาระให้โลกในทุกวัน",
    color: "bg-workspace",
    icon: <LeafIcon />,
  },
  {
    title: "Wellness ทุกช่วงเวลา",
    text: "กลิ่นหอมจากน้ำมันหอมระเหยแท้ ช่วยให้กายและใจได้พัก ตั้งแต่ตื่นนอนจนถึงเวลาเข้านอน",
    color: "bg-daybreak",
    icon: <SunIcon />,
  },
  {
    title: "อ่อนโยน & Zero Waste",
    text: "เน้นความปลอดภัย ไม่ระคายเคือง พร้อม Refill Station ให้เติมได้ไม่ต้องซื้อขวดใหม่",
    color: "bg-refuel",
    icon: <RefillIcon />,
  },
];

const bodyCare = [
  { name: "Shower Gel", th: "เจลอาบน้ำ", price: 500, color: "bg-workspace" },
  { name: "Shampoo", th: "แชมพู", price: 500, color: "bg-daybreak" },
  { name: "Conditioner", th: "ครีมนวดผม", price: 500, color: "bg-transition" },
  { name: "Lotion", th: "โลชั่นบำรุงผิว", price: 500, color: "bg-kraft" },
  { name: "Hand Wash", th: "สบู่ล้างมือ", price: 500, color: "bg-refuel" },
];

const aroma = [
  { name: "Essential Oil", th: "น้ำมันหอมระเหยแท้", price: 850, color: "bg-deepsleep" },
  { name: "Aroma Oil", th: "น้ำมันหอม", price: 350, color: "bg-transition" },
  { name: "Aroma Spray", th: "สเปรย์หอมปรับอากาศ", price: 450, color: "bg-workspace" },
];

const moments = [
  { name: "Day Break", th: "ตื่นเช้าสดชื่น", time: "06:00–09:00", color: "bg-daybreak" },
  { name: "Workspace", th: "โฟกัสกับงาน", time: "09:00–12:00", color: "bg-workspace" },
  { name: "Refuel", th: "เติมพลังช่วงบ่าย", time: "12:00–17:00", color: "bg-refuel" },
  { name: "Transition", th: "ผ่อนคลายหลังเลิกงาน", time: "17:00–20:00", color: "bg-transition" },
  { name: "Deep Sleep", th: "หลับลึกสบาย", time: "21:00–23:00", color: "bg-deepsleep" },
];

const faqs = [
  {
    q: "ผิวแพ้ง่ายใช้ได้ไหม?",
    a: "สินค้าของเราเน้นความอ่อนโยนและส่วนผสมจากธรรมชาติ แต่ผิวแต่ละคนต่างกัน แนะนำให้ทดสอบที่ท้องแขนก่อนใช้ ถ้ามีอาการระคายเคืองให้หยุดใช้ และทักไลน์มาปรึกษาเราได้เสมอ",
  },
  {
    q: "Refill Station คืออะไร ใช้ยังไง?",
    a: "เรามี Shower Gel, Hand Wash และ Shampoo แบบแกลลอน 5 ลิตร ให้คุณเติมใส่ขวดเดิมได้ คิดราคาตามปริมาณจริง 1 มล. = 1 บาท เติมเท่าที่ใช้ ประหยัดและลดขยะพลาสติก",
  },
  {
    q: "Aroma Roller ใช้อย่างไร?",
    a: "กลิ้งบริเวณชีพจร เช่น ข้อมือ ลำคอ และหลังใบหู ได้ทุกครั้งที่อยากผ่อนคลาย ตั้งสมาธิ หรือเติมพลัง ใช้ภายนอกเท่านั้น หลีกเลี่ยงบริเวณดวงตา",
  },
  {
    q: "สั่งซื้อและจัดส่งอย่างไร?",
    a: "กดปุ่ม “ทักไลน์เลย” แจ้งสินค้าและจำนวนที่ต้องการ แอดมินจะสรุปยอดและแจ้งค่าจัดส่งให้ทางแชท",
  },
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-kraft/30 bg-cream/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-2" aria-label="Earthtones หน้าแรก">
            <Image src="/images/logo.png" alt="" width={44} height={44} className="h-10 w-10 rounded-xl" />
            <span className="font-display text-lg font-semibold tracking-wide">EARTHTONES</span>
          </a>
          <nav className="hidden items-center gap-6 text-ink-soft md:flex">
            <a href="#products" className="hover:text-ink">สินค้า</a>
            <a href="#refill" className="hover:text-ink">Refill Station</a>
            <a href="#faq" className="hover:text-ink">คำถามที่พบบ่อย</a>
            <a href="#contact" className="hover:text-ink">ติดต่อเรา</a>
          </nav>
          <LineButton small />
        </div>
      </header>

      <main id="top" className="flex-1 overflow-x-clip">
        {/* ส่วนหัว */}
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-10 sm:px-6 md:grid-cols-2 md:pt-16">
          <div>
            <p className="font-display text-eyebrow uppercase tracking-[0.2em] text-kraft-dark">
              Nature has a rhythm. So do we.
            </p>
            <h1 className="mt-4 font-display text-h1 font-medium">
              ดูแลตัวเองอย่าง<span className="inline-block text-refuel">อ่อนโยน</span>
              <br />
              ไปพร้อมกับดูแล<span className="inline-block text-workspace">โลก</span>
            </h1>
            <p className="mt-5 max-w-xl text-lead text-ink-soft">
              ของใช้ส่วนตัวสายธรรมชาติจาก Earthtones ทั้งเจลอาบน้ำ แชมพู โลชั่น น้ำมันหอมระเหย
              และ Refill Station ที่ช่วยให้คุณลดขยะได้ทุกวัน
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LineButton />
              <a
                href="#products"
                className="inline-flex items-center rounded-full border-2 border-ink px-6 py-3 font-medium transition hover:bg-ink hover:text-cream"
              >
                ดูสินค้าทั้งหมด
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rotate-2 rounded-[2rem] bg-cream-deep" aria-hidden />
            <Image
              src="/images/aroma-roller-set.jpg"
              alt="Earthtones Aroma Roller Set 5 กลิ่น ในกล่องกระดาษคราฟต์"
              width={1254}
              height={1254}
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-auto w-full rounded-[1.75rem] shadow-lg"
            />
          </div>
        </section>

        {/* จุดเด่น */}
        <section className="bg-paper py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionTitle eyebrow="Why Earthtones" title="ทำไมต้อง Earthtones" />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {highlights.map((h) => (
                <article key={h.title} className="rounded-3xl border border-kraft/30 bg-cream p-6">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl text-paper ${h.color}`}>
                    {h.icon}
                  </div>
                  <h3 className="mt-4 font-display text-h3 font-medium">{h.title}</h3>
                  <p className="mt-2 text-ink-soft">{h.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* สินค้า */}
        <section id="products" className="scroll-mt-20 py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionTitle eyebrow="Our Products" title="สินค้าและราคา" />

            <h3 className="mt-10 font-display text-h3 font-medium">Body & Hair Care</h3>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {bodyCare.map((p) => (
                <ProductCard key={p.name} {...p} />
              ))}
            </div>

            <h3 className="mt-12 font-display text-h3 font-medium">Aromatherapy</h3>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {aroma.map((p) => (
                <ProductCard key={p.name} {...p} />
              ))}
            </div>
          </div>
        </section>

        {/* Refill Station */}
        <section id="refill" className="scroll-mt-20 px-4 sm:px-6">
          <div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] bg-workspace p-8 text-paper md:grid-cols-[1.3fr_1fr] md:items-center md:p-12">
            <div>
              <p className="font-display text-eyebrow uppercase tracking-[0.2em] text-cream-deep">Refill Station</p>
              <h2 className="mt-3 font-display text-h2 font-medium">เติมเท่าที่ใช้ ลดขยะได้จริง</h2>
              <p className="mt-4 text-lead text-cream">
                นำขวดเดิมมาเติม Shower Gel, Hand Wash และ Shampoo จากแกลลอนขนาด 5 ลิตร
                คิดราคาตามปริมาณที่เติมจริง
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {["Shower Gel", "Hand Wash", "Shampoo"].map((t) => (
                  <li key={t} className="rounded-full bg-paper/15 px-4 py-1.5 text-eyebrow font-medium">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-paper p-6 text-center text-ink">
              <p className="text-ink-soft">ราคาเติม</p>
              <p className="mt-1 font-display text-h1 font-semibold text-workspace">1 มล. = 1 บาท</p>
              <p className="mt-2 text-eyebrow text-ink-soft">ตัวอย่าง: เติม 300 มล. จ่ายเพียง 300 บาท</p>
            </div>
          </div>
        </section>

        {/* Aroma Roller Moments */}
        <section className="py-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/images/aroma-roller-box-back.jpg"
                alt="ด้านหลังกล่อง Aroma Roller Set แสดง 5 กลิ่นสำหรับ 5 ช่วงเวลาของวัน"
                width={1254}
                height={1254}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="h-auto w-full rounded-[1.75rem] shadow-md"
              />
            </div>
            <div className="order-1 md:order-2">
              <SectionTitle
                eyebrow="Aroma Roller Set"
                title="5 กลิ่น สำหรับ 5 ช่วงเวลาของวัน"
                align="left"
              />
              <p className="mt-4 text-ink-soft">
                ได้แรงบันดาลใจจากนาฬิกาชีวิตของร่างกาย ผสมจากน้ำมันหอมระเหยแท้ 100% Natural Origin
                ไม่มีน้ำมันแร่ (Mineral Oil Free) พกง่าย ใช้ได้ทุกที่
              </p>
              <ul className="mt-6 space-y-3">
                {moments.map((m) => (
                  <li key={m.name} className="flex items-center gap-3 rounded-2xl bg-paper p-3">
                    <span className={`h-10 w-2.5 shrink-0 rounded-full ${m.color}`} aria-hidden />
                    <div className="min-w-0 flex-1">
                      <p className="font-display font-medium">{m.name}</p>
                      <p className="text-eyebrow text-ink-soft">{m.th}</p>
                    </div>
                    <span className="shrink-0 text-eyebrow font-medium text-kraft-dark">{m.time}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-eyebrow text-ink-soft">สอบถามราคาเซ็ตและสต็อกได้ทางไลน์</p>
            </div>
          </div>
        </section>

        {/* คำถามที่พบบ่อย */}
        <section id="faq" className="scroll-mt-20 bg-paper py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <SectionTitle eyebrow="FAQ" title="คำถามที่พบบ่อย" />
            <div className="mt-10 space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-kraft/30 bg-cream p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-medium">
                    {f.q}
                    <span className="text-xl text-kraft-dark transition group-open:rotate-45" aria-hidden>
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-ink-soft">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ติดต่อเรา */}
        <section id="contact" className="scroll-mt-20 py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="rounded-[2rem] bg-kraft p-8 text-center text-ink md:p-14">
              <Image src="/images/logo.png" alt="" width={88} height={88} className="mx-auto h-20 w-20 rounded-3xl" />
              <h2 className="mt-4 font-display text-h2 font-medium">อยากลองใช้ หรือมีคำถาม? ทักมาคุยกันได้เลย</h2>
              <p className="mx-auto mt-3 max-w-xl text-ink/80">
                แอดมินพร้อมช่วยเลือกสินค้าที่เหมาะกับคุณ และตอบทุกคำถามเรื่อง Refill Station
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <LineButton />
                <a
                  href={LINKTREE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border-2 border-ink px-6 py-3 font-medium transition hover:bg-ink hover:text-kraft"
                >
                  ช่องทางอื่น ๆ ทั้งหมด
                </a>
              </div>
              <dl className="mx-auto mt-10 grid max-w-2xl gap-4 text-left sm:grid-cols-3">
                <ContactItem label="LINE" value={LINE_ID} />
                <ContactItem label="ที่ตั้ง" value={LOCATION} />
                <ContactItem label="เวลาตอบแชท" value={OPEN_HOURS} />
              </dl>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-kraft/30 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 text-center text-eyebrow text-ink-soft sm:px-6">
          <p className="font-display text-body text-ink">EARTHTONES</p>
          <p>Nature has a rhythm. So do we.</p>
          <p>© 2026 Earthtones · {LOCATION}</p>
        </div>
      </footer>
    </>
  );
}

function LineButton({ small = false }: { small?: boolean }) {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex shrink-0 items-center gap-2 rounded-full bg-line font-medium text-white shadow-sm transition hover:brightness-95 ${
        small ? "px-4 py-2 text-eyebrow" : "px-6 py-3"
      }`}
    >
      <LineIcon />
      ทักไลน์เลย
    </a>
  );
}

function SectionTitle({
  eyebrow,
  title,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <p className="font-display text-eyebrow uppercase tracking-[0.2em] text-kraft-dark">{eyebrow}</p>
      <h2 className="mt-2 font-display text-h2 font-medium">{title}</h2>
    </div>
  );
}

function ProductCard({ name, th, price, color }: { name: string; th: string; price: number; color: string }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-kraft/30 bg-cream-deep">
      <div className="flex flex-1 flex-col p-4">
        <p className="font-display text-h3 font-medium leading-tight">{name}</p>
        <p className="mt-1 text-eyebrow text-ink-soft">{th}</p>
        <p className="mt-4 font-display text-lead font-semibold">
          ฿{price.toLocaleString("th-TH")}
        </p>
      </div>
      <div className={`h-3 ${color}`} aria-hidden />
    </article>
  );
}

function ContactItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-paper/60 p-4">
      <dt className="text-eyebrow text-ink/70">{label}</dt>
      <dd className="mt-1 font-medium">{value}</dd>
    </div>
  );
}

function LineIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M12 3C6.48 3 2 6.63 2 11.1c0 4 3.55 7.36 8.35 8 .33.07.77.22.88.5.1.25.07.65.03.9l-.14.86c-.04.25-.2 1 .88.54 1.08-.45 5.83-3.43 7.95-5.88C21.4 14.4 22 12.83 22 11.1 22 6.63 17.52 3 12 3Zm-3.6 10.5H6.4a.5.5 0 0 1-.5-.5V9a.5.5 0 0 1 1 0v3.5h1.5a.5.5 0 0 1 0 1Zm1.6-.5a.5.5 0 0 1-1 0V9a.5.5 0 0 1 1 0v4Zm4.8 0a.5.5 0 0 1-.9.3l-2-2.73V13a.5.5 0 0 1-1 0V9a.5.5 0 0 1 .9-.3l2 2.73V9a.5.5 0 0 1 1 0v4Zm3.2-2.5a.5.5 0 0 1 0 1h-1.5v1h1.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5V9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-1.5v1H18Z" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 19c0-8 5-13 15-14-1 10-6 15-14 15" />
      <path d="M5 19 13 11" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function RefillIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 12a8 8 0 0 1-14.3 4.9M4 12a8 8 0 0 1 14.3-4.9" />
      <path d="M18.5 3v4.2h-4.2M5.5 21v-4.2h4.2" />
    </svg>
  );
}
