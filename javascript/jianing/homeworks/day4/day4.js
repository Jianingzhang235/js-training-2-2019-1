function readURL(input) {
    if (input.file && input.file[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.file[0]);
    }
}