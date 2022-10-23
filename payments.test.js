describe('rb- Payments tests payment info object', function () {
  beforeEach(function () {
    // initialization logic
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
    // submitPaymentInfo();
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
    expect(summaryTds.length).toEqual(3);
  });
  it('rb- aPT tests new row is appended to payment table', function () {
    appendPaymentTable(createCurPayment());
    expect(paymentTbody.childElementCount).toBeGreaterThan(0);
  });
  afterAll(function () {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    allPayments = {};
  });
});
