const cds = require('@sap/cds');



module.exports = (srv) => {
    srv.on("read", async (req) => {
       console.log('Hello Server!');
        try {
            const service = await cds.connect.to('s4');
            const url = '/sap/opu/odata/sap/ZAPI_RETURN_WP/?sap-client=001';
            response = await service.get(url);
        } catch (e) {
            console.log(e);
        } finally {
            return response;
        }
    })
}
