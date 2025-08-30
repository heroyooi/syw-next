export const metadata = {
  title: 'Contact | Syw Frontend',
  description: '연락처 정보'
};

export default function ContactPage() {
  return (
    <main className="container">
      <h1>Contact</h1>
      <ul>
        <li>이메일: <a href="mailto:heroyooi1018@gmail.com">heroyooi1018@gmail.com</a></li>
        <li>전화번호: <a href="tel:010-4147-5948">010-4147-5948</a></li>
        <li>GitHub: <a href="https://github.com/heroyooi">github.com/heroyooi</a></li>
      </ul>
    </main>
  );
}
