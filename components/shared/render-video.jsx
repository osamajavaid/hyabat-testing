export default function RenderVideo({
    className,
    video,
    type = "video/webm",
}) {

    return (
        <video
            key={video}
            autoPlay
            muted
            loop
            className={className}
        >
            <source src={video} type={type} />
            Your browser does not support the video tag.
        </video>
    );
}
