# EcoCompass
An AI-powered web platform that analyzes sustainability reports, extracts ESG (Environmental, Social, and Governance) insights, computes ESG scores, and predicts business outcomes based on ESG performance.

## Overview

- Built using a Django backend with a React frontend.

- Leverages a fine-tuned BERT model to analyze textual ESG data.

- Computes ESG scores and awards companies with performance-based badges.

- Stores all extracted insights and analytics in a PostgreSQL database.

- Integrates Gemini API to provide ESG improvement recommendations.

- Includes an ML model to predict future revenue based on ESG performance.

## Tech Stack

Frontend:

- React (with Axios, React Router, etc.)

- Tailwind CSS

Backend:

- Django + Django REST Framework

- PostgreSQL

- Transformers (for fine-tuned BERT model)

APIs:

- Gemini API for recommendations

Fine-tuned BERT for multilabel ESG classification:
- https://github.com/fathmamehnoor/esg-multilabel-classification
