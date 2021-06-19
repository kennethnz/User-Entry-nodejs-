

$('#update_user').submit(function (e) {
    e.preventDefault();

    var unidexed_array = $(this).serializeArray()
    //    console.log(unidexed_array)
    var data = {}

    $.map(unidexed_array, function (n, i) {
        data[n['name']] = n['value']

    })
    console.log(data)

    var request = {
        "url": `http://localhost:8000/api/users/${data.id}`,
        "method": "PUT",
        "data": data
    }
    $.ajax(request).done(function (response) {
        alert("data updated")

    })

})



if (window.location.pathname == "/") {
    $ondelete = $('.table tbody td a.delete');
    $ondelete.click(function () {
        var id = $(this).attr('data-id')

        var request = {

            "url": `http://localhost:8000/api/users/${id}`,
            "method": 'DELETE'
        }
        var modal = $('.modal')

$('.delete').click(function() {
    model.show()
})
        if (confirm("Do yo really want to delete")) {
            $.ajax(request).done(function (res) {
                alert('data deleted successfully');
                location.reload()
            })
        }
    })
}

