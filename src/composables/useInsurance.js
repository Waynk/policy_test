import { ref } from 'vue';

export function useInsurance() {
  // 1. 寫死的險種資料 (Product Master)
  const products = ref([
    { prodCode: 'L001', prodName: '壽險-全方位終身壽險', baseRate: 0.0015 },
    { prodCode: 'A002', prodName: '意外-定期傷害保險', baseRate: 0.0008 },
    { prodCode: 'H003', prodName: '醫療-守護神住院險', baseRate: 0.0025 }
  ]);

  // 2. 寫死的保單列表 (初始資料)
  const policies = ref([
    {
      policyNo: 'POL-2024032301',
      prodName: '全方位終身壽險',
      sumAssured: 1000000,
      premium: 15600,
      status: '有效',
      crtDate: '2026-01-10'
    }
  ]);

  // 3. 模擬後端計算邏輯
  const calculatePremium = (prodCode, sumAssured) => {
    const product = products.value.find(p => p.prodCode === prodCode);
    if (!product) return 0;
    
    // 模擬壽險公式：保額 * 險種費率 * (固定係數 10)
    return Math.round(sumAssured * product.baseRate * 10);
  };

  // 4. 模擬投保動作 (直接 Push 到 Array)
  const addPolicy = (newPolicyData) => {
    const product = products.value.find(p => p.prodCode === newPolicyData.prodCode);
    const premium = calculatePremium(newPolicyData.prodCode, newPolicyData.sumAssured);

    const newEntry = {
      policyNo: 'POL-' + Date.now(), // 隨機序號
      prodName: product.prodName,
      sumAssured: newPolicyData.sumAssured,
      premium: premium,
      status: '核保中',
      crtDate: new Date().toISOString().split('T')[0]
    };

    policies.value.unshift(newEntry); // 加到列表最前面
    return newEntry;
  };

  return { products, policies, calculatePremium, addPolicy };
}