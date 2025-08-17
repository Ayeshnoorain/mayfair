from flask import Flask, render_template, request, jsonify
import os

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/submit_consultation', methods=['POST'])
def submit_consultation():
    data = request.get_json()
    # Here you would typically save to database or send email
    # For now, we'll just return success
    return jsonify({'success': True, 'message': 'Thank you! We will contact you soon.'})

if __name__ == '__main__':
    # Replit-compatible configuration
    app.run(debug=True, host='0.0.0.0', port=8080) 