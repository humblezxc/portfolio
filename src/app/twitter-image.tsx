import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Yaroslav Stopenchuk — Frontend Developer";
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(135deg, #0f0a1a 0%, #1a1025 50%, #0f0a1a 100%)",
                    position: "relative",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: "-100px",
                        left: "-100px",
                        width: "400px",
                        height: "400px",
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: "-150px",
                        right: "-100px",
                        width: "500px",
                        height: "500px",
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(109, 40, 217, 0.3) 0%, transparent 70%)",
                    }}
                />

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 10,
                    }}
                >
                    <div
                        style={{
                            fontSize: 72,
                            fontWeight: 700,
                            color: "#a78bfa",
                            marginBottom: "16px",
                        }}
                    >
                        Yaroslav Stopenchuk
                    </div>
                    <div
                        style={{
                            fontSize: 36,
                            color: "#a89ec4",
                            marginBottom: "40px",
                        }}
                    >
                        Frontend Developer
                    </div>
                    <div
                        style={{
                            display: "flex",
                            gap: "16px",
                        }}
                    >
                        {["React", "Next.js", "TypeScript", "Tailwind"].map((tech) => (
                            <div
                                key={tech}
                                style={{
                                    padding: "8px 20px",
                                    borderRadius: "12px",
                                    background: "rgba(139, 92, 246, 0.15)",
                                    border: "1px solid rgba(139, 92, 246, 0.3)",
                                    color: "#a78bfa",
                                    fontSize: 20,
                                }}
                            >
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>

                <div
                    style={{
                        position: "absolute",
                        bottom: "30px",
                        fontSize: 18,
                        color: "#6b5f8a",
                    }}
                >
                    portfolio-yaroslav-stopenchuk.vercel.app
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
