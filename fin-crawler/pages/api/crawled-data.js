
export default function handler(req, res) {
  res.status(200).json([
    { address: "서울시 강남구 역삼동", area: "18평", price: "5.3억", type: "매매", isUrgent: true },
    { address: "서울시 성동구 성수동", area: "12평", price: "2.1억", type: "전세", isUrgent: false },
    { address: "부산시 해운대구 우동", area: "10평", price: "75만원", type: "월세", isUrgent: true }
  ]);
}
