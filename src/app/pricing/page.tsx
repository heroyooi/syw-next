export const metadata = {
  title: 'Pricing | Syw Frontend',
  description: '2025 퍼블리싱 단가표'
};

export default function PricingPage() {
  return (
    <main className="container">
      <h1>2025 퍼블리싱 단가표</h1>
      <table className="pricing-table">
        <thead>
          <tr>
            <th>작업</th>
            <th>단가 (원)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>랜딩 페이지</td>
            <td>1,000,000 ~</td>
          </tr>
          <tr>
            <td>반응형 페이지</td>
            <td>1,500,000 ~</td>
          </tr>
          <tr>
            <td>컴포넌트 제작</td>
            <td>200,000 ~</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
