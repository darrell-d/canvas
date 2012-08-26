function makeReady()
{
    $(document).ready
    (
        function()
        {
            var canvas = document.getElementById("canvas");
            if(canvas.getContext)
            {
                ctx = canvas.getContext('2d');
                ctx.fillStyle = "rgb(200,0,0)";
                ctx.fillRect(0,0,5,5);
            }
            else
            {
                alert('Your browser does not support canvas');
            }
        }
    )
}