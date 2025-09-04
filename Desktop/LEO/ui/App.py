import os
import json
import requests
import streamlit as st
from dotenv import load_dotenv


load_dotenv()
API_BASE_URL = os.getenv("API_BASE_URL", "http://localhost:8000")

st.set_page_config(page_title="Advisor", layout="wide")
st.title("Advisor Chat")

if "history" not in st.session_state:
    st.session_state.history = []

for role, content in st.session_state.history:
    with st.chat_message(role):
        st.markdown(content)

prompt = st.chat_input("Ask about markets, news, portfolios, or options...")
if prompt:
    st.session_state.history.append(("user", prompt))
    with st.chat_message("user"):
        st.markdown(prompt)
    with st.chat_message("assistant"):
        with st.spinner("Thinking..."):
            try:
                resp = requests.post(f"{API_BASE_URL}/chat", json={"message": prompt}, timeout=60)
                resp.raise_for_status()
                data = resp.json()
                text = data.get("text", "(no response)")
            except Exception as e:
                text = f"Error contacting API: {e}"
            st.markdown(text)
            st.session_state.history.append(("assistant", text))


