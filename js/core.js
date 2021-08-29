/* Future Functions:
 * - Loading Spinner (Including Style Editing From Script)
 * - Ajax Content Load
 * - Ajax Form Submit
 * - Items to Hide / Items to Show
 * - Sorting
 * - Drag & Drop Element
 * - Notify
 * - DataTable Simple Init
 * - Modals (+Styling)
 * - Confirmation Modal (Delete, Rename, etc...)
 */


// START: Sleep
function sleep(milliseconds) // Reference: https://sitepoint.com/delay-sleep-pause-wait
{
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
// END: Sleep


// START: Initial Uppercase
function ucfirst(string) {
    if (typeof (string) != 'string') return;

    return string[0].toUpperCase() + string.substring(1);
}
// END: Initial Uppercase


// START: Clone Json
function jsonClone(obj) {
    return JSON.parse(JSON.stringify(obj)); // Reference: https://stackoverflow.com/a/5344074
}
// END: Clone Json


// START: Add/Remove Row
$.fn.dynamicRows = function (data) {
    var main = $(this);

    main.find('.add-row').on('click', function (e) {
        e.preventDefault();
        addRow();
    });

    // Add Row
    function addRow(_data = {}) {
        var row_id = Date.now();
        var htmlToAdd = data.htmlToAdd;

        var variables = jsonClone(_data.variables ?? {});

            console.log('ULTRA'); 
            console.log('ULTRA-var: ' + variables); 
        Object.entries(variables).forEach(([key, value]) => {
            console.log('ULTRA: ' + value); 
            var replaceThis = '%' + key + '%';
            htmlToAdd = htmlToAdd.replace(new RegExp(replaceThis, 'g'), value);
        });
        htmlToAdd = htmlToAdd.replace(/\%.+?\%/g, '');

        var elemToAdd;
        if ($(htmlToAdd).prop("tagName") == undefined) {
            elemToAdd = $('<span></span>').append(htmlToAdd);
        } else {
            elemToAdd = $(htmlToAdd);
        }

        elemToAdd.attr('dynamic-rows-id', row_id);
        elemToAdd.addClass('dynamicRows-row');
        elemToAdd.find('.remove-row').attr('dynamic-rows-id', row_id);

        main.append(elemToAdd);

        // START: Remove Button
        elemToAdd.find('.remove-row').on('click', function () {
            var dynamicRows_id = $(this).attr('dynamic-rows-id');

            $('.dynamicRows-row[dynamic-rows-id="' + dynamicRows_id + '"]').remove();
        });
        // END: Remove Button
    }

    // Remove All Rows
    function removeAllRows() {
        main.find('.dynamicRows-row').remove();
    }

    return {
        addRow: addRow,
        removeAllRows: removeAllRows
    };
};
// END: Add/Remove Row
