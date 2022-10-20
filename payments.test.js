describe('rb- Payments tests payment info object', function () {
  beforeEach(function () {
    // initialization logic
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
  });
  // createCurPayment tests
  it('rb- cCP() tests the current payment object to include all information', function () {
    expect(createCurPayment()).toBeInstanceOf(Object);
    expect(Object.keys(createCurPayment()).length).toEqual(3);
    expect(createCurPayment().billAmt).toEqual('100');
    expect(createCurPayment().tipAmt).toEqual('20');
    expect(createCurPayment().tipPercent).toEqual(20);
  });
  // submitPaymentInfo tests
  it('rb- sPI() tests the correct amount & the append to paymentTbody ', function () {
    submitPaymentInfo();
    expect(Number(allPayments.payment1.billAmt)).toEqual(100);
    expect(paymentTbody.childElementCount).toBeGreaterThan(0);
  });
  it('rb- uS() tests correct summary value is received ', function () {
    updateSummary();
    expect(summaryTds[0].innerText).toBe('$100');
    expect(summaryTds[1].innerText).toEqual('$20');
  });
  it('rb- aPT tests new row is appended to payment table', function () {
    // appendPaymentTable(createCurPayment());
    expect(paymentTbody.children.length).toEqual(1);
  });
  afterAll(function () {
    allPayments = {};
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    for (let td of summaryTds) {
      td.innerHTML = '';
    }
  });
});
