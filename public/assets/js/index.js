function listingRec(data) {
    const listRec = data[0];
    const timeCheck = data[1];
    Object.keys(listRec).forEach(k => {
        $('#list-rec').append(`
            <tr>
                <td>${k}</td>
                <td id='${k}'>${listRec[k]}</td>
                <td>${timeCheck[k]}</td>
            </tr>
        `);
    })
}