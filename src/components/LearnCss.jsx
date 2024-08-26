const LearnCss = () => {
    return (
        <div>
            {/* inline style  */}
            <h1 style={{ backgroundColor: "red", marginTop: "30px" }}>
                Inline CSS
            </h1>
            <p style={{ backgroundColor: "yellow", padding: "10px" }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellat, hic?
            </p>

            {/* external css  */}

            <h1>External CSS </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                ut asperiores nam molestias optio consequuntur modi perspiciatis
                magni similique sint, natus molestiae doloribus? Eos soluta
                omnis, iure placeat iste laudantium!
            </p>
            <p>
                <span className="error">Error message </span>
            </p>
            <p>
                <span className="success">Success message </span>
            </p>
            <p>
                <span className="warning">Warning message </span>
            </p>
        </div>
    );
};

export default LearnCss;
