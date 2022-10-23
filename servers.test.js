describe('Servers test (with setup and tear-down)', function () {
  beforeAll(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
    submitServerInfo();
  });

  it('submitServerInfo should add a new server name to allServers', function () {
    // submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });
  it('rb- Test updateServerTable should append the new server data to the Tbody', function () {
    // submitServerInfo();
    expect(serverTbody.childElementCount).toEqual(Object.keys(allServers).length);
  });
  afterAll(function () {
    // teardown logic
    serverNameInput.value = '';
    allServers = {};
    serverId = 0;
    serverTbody.innerHTML = '';
  });
});
