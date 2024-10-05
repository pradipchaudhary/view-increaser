# [View Increaser](https://view-increaser.onrender.com/)

A simple web-based tool that automatically increases the views on a given URL at regular intervals by simulating real user hits. The tool opens the specified URL in a new tab, holds it open for 15 seconds, and then closes the tab, repeating the process every 15 seconds.

## Features

-   **Automatic URL Hits**: Automatically increases views for a given URL every 15 seconds.
-   **Hit Counter**: Displays the number of hits each URL receives.
-   **Live Countdown**: Shows a countdown timer for the next hit.
-   **Start/Stop Functionality**: Start or stop the view increaser task dynamically.
-   **MVC Pattern**: Separation of concerns for scalability and maintainability.

## Demo

[![Demo GIF](demo.gif)](https://view-increaser.onrender.com/)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/pradipchaudhary/view-increaser.git
    ```

2. Navigate into the project directory:

    ```bash
    cd view-increaser
    ```

3. Open the `index.html` file in a web browser to start using the View Increaser.

## Usage

1. Enter the URL you want to increase views for in the input field.
2. Click **"Start Increasing Views"** to begin the process.
3. The system will automatically simulate user visits to the URL every 15 seconds.
4. You can stop the process at any time by clicking the **"Stop Increasing Views"** button.

## Built With

-   **Node.js**: Server-side JavaScript runtime.
-   **Express.js**: Web framework for Node.js.
-   **EJS**: Templating engine for rendering views.
-   **MVC Architecture**: Follows the Model-View-Controller pattern for separation of concerns.
-   **HTML/CSS**: Frontend structure and styling.

## How It Works

-   The application simulates a real user visit by opening the given URL in a new tab and keeping it open for 15 seconds.
-   After each visit, the hit counter is updated, and the process repeats every 15 seconds.
-   You can stop the process at any time, and the hit counter, URL, and countdown timer are reset.

## Future Improvements

-   Add user authentication and session tracking.
-   Support for multiple URLs.
-   Add functionality to adjust the time interval between hits.
-   Provide analytics for each URL being hit.

## Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project.
2. Create your feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

**Author**: [Pradip Chaudhary](https://github.com/pradipchaudhary)

Feel free to contribute, give feedback, or raise issues. Enjoy increasing those views!
