# Generative AI Detection

![demo image](<https://github.com/ankitsharma-tech/Generative-AI-Detection/blob/main/Screenshot%20(366).png>)

## Overview

This project is a web application built with **ReactJS** (frontend) and **Python** (backend) that detects whether a given text is human-written or AI-generated. It participates in the **Voight-Kampff Generative AI Authorship Verification 2024** challenge.

## Table of Contents

- [Generative AI Detection](#generative-ai-detection)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Modules and Libraries](#modules-and-libraries)
    - [Flask](#flask)
    - [Flask-CORS](#flask-cors)
    - [PyTorch](#pytorch)
    - [Transformers (Hugging Face)](#transformers-hugging-face)
    - [Regular Expressions (re)](#regular-expressions-re)
    - [OrderedDict (collections)](#ordereddict-collections)
  - [Algorithm and Use Case](#algorithm-and-use-case)
    - [Perplexity](#perplexity)
    - [Burstiness](#burstiness)
    - [Thresholding](#thresholding)
    - [API Usage](#api-usage)
    - [Use Cases](#use-cases)
  - [Summary:](#summary)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Data](#data)
  - [Evaluation Metrics](#evaluation-metrics)
  - [Key Changes:](#key-changes)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- **AI vs Human Detection**: Classifies text as human-written or AI-generated.
- **Machine Learning Models**: Uses various models for accurate classification.
- **ReactJS Frontend**: Provides a user-friendly interface.
- **Python Backend**: Handles AI detection logic with robust backend processing.

## Modules and Libraries

### Flask

- Lightweight Python web framework for building web applications.
- Provides HTTP request routing and response generation.

### Flask-CORS

- Extension to enable Cross-Origin Resource Sharing (CORS).
- Allows server to respond to requests from different origins.

### PyTorch

- Deep learning library used to load and run models.
- Runs the GPT-2 model for computing perplexity.

### Transformers (Hugging Face)

- Uses `GPT2LMHeadModel` and `GPT2TokenizerFast` for loading the GPT-2 model and tokenizer.
- GPT-2 is a pre-trained language model for text generation and analysis.

### Regular Expressions (re)

- Performs text processing tasks like character extraction and sentence splitting.

### OrderedDict (collections)

- Maintains order of dictionary entries for structured results.

## Algorithm and Use Case

The core algorithm uses GPT-2 to calculate **Perplexity** and **Burstiness** of input text:

### Perplexity

- Measures how well the model predicts a sentence.
- Lower perplexity implies human-written text; higher implies AI-generated.
- Computed using the negative log likelihood of each word.

### Burstiness

- Measures variation in perplexity across lines.
- High burstiness often indicates AI-generated content.

### Thresholding

- Perplexity < 60: Likely AI-generated.
- Perplexity 60–80: Most likely AI, but requires more text for confirmation.
- Perplexity > 80: Likely human-written.

### API Usage

- Provides a POST route (`/`) accepting JSON payloads with a text field.
- Returns label ("AI-generated" or "Human-written") with perplexity and burstiness scores.

### Use Cases

- Content authenticity checks (articles, blogs, essays)
- AI detection in education (preventing AI plagiarism)
- Content moderation on social media or forums

## Summary:

**Modules used:** Flask, Flask-CORS, PyTorch, transformers, regex, and OrderedDict.<br>
**Algorithms used:** Perplexity (text predictability), Burstiness (variation in sentence predictability), and thresholding for labeling the text as AI or human-written.<br>
**Use case:** AI vs. human text detection, content authenticity verification.<br>

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ankitsharma-tech/Generative-AI-Detection.git
   cd Generative-AI-Detection
   ```

2. **Install frontend dependencies**:

   ```bash
   cd frontend
   npm install
   ```

3. **Install backend dependencies**:

   ```bash
   cd ../server
   pip install -r requirements.txt
   ```

4. **Start the backend server**:

   ```bash
   python app.py
   ```

5. **Start the frontend server**:
   ```bash
   npm start
   ```

## Usage

1. Open your browser and go to `http://localhost:3000`.
2. Upload a pair of texts (one human-written and one AI-generated).
3. Click on the **"Analyse"** button to see the results.

## Data

- The dataset used in this project consists of a collection of human-written and AI-generated texts.
- Texts are analyzed to calculate metrics like **Perplexity** and **Burstiness** to determine their likely origin (AI or human).

## Evaluation Metrics

- **Perplexity**: Measures how well the AI model predicts the next word in a text. Lower perplexity suggests human authorship, while higher perplexity suggests AI generation.
- **Burstiness**: Measures the variation in perplexity across different lines of text. Higher burstiness often indicates AI-generated text.

## Key Changes:

1. Reorganized the content under appropriate headings.
2. Added a **Data** section for clarity on the dataset.
3. Reformatting of steps in **Installation** to improve clarity.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please fork the repository and submit a pull request.

## License

This project is licensed under the **MIT License**. See the [LICENSE](https://github.com/ankitsharma-tech/Generative-AI-Detection/blob/main/LICENSE) file for details.
