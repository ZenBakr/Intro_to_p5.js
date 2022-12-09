function preload()
{
}
function setup()
{
    canvas = createCanvas(650,500)
    canvas.position(110, 250)
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}
function draw()
{
    image(video, 0, 0,650,500);
    tint(tint_color);
}
function take_snapshot()
{
    save('studend_name.png');
}
function apply_filter()
{
    tint_color = document.getElementById("input").value;
}