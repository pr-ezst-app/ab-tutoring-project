import json
import os
import urllib.request
import urllib.error  # reload


def handler(event: dict, context) -> dict:
    """Send consultation request email to AB Tutoring when a user submits the contact form."""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body', '{}'))
    name = body.get('name', '').strip()
    email = body.get('email', '').strip()
    phone = body.get('phone', '').strip()
    subject = body.get('subject', '').strip()
    message = body.get('message', '').strip()

    if not name or not email:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Name and email are required'})
        }

    html_body = f"""
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #1a3d6e; padding: 24px; border-radius: 12px 12px 0 0;">
        <h2 style="color: white; margin: 0; font-size: 20px;">New Consultation Request</h2>
        <p style="color: rgba(255,255,255,0.7); margin: 4px 0 0; font-size: 14px;">AB Tutoring Website</p>
      </div>
      <div style="background: #f5f8ff; padding: 24px; border-radius: 0 0 12px 12px; border: 1px solid #dde8f5;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; font-size: 13px; color: #666; width: 120px;">Name</td><td style="padding: 8px 0; font-size: 14px; font-weight: bold; color: #1a3d6e;">{name}</td></tr>
          <tr><td style="padding: 8px 0; font-size: 13px; color: #666;">Email</td><td style="padding: 8px 0; font-size: 14px; color: #1a3d6e;"><a href="mailto:{email}" style="color: #2a7a5a;">{email}</a></td></tr>
          {"<tr><td style='padding: 8px 0; font-size: 13px; color: #666;'>Phone</td><td style='padding: 8px 0; font-size: 14px; color: #1a3d6e;'>" + phone + "</td></tr>" if phone else ""}
          {"<tr><td style='padding: 8px 0; font-size: 13px; color: #666;'>Subject</td><td style='padding: 8px 0; font-size: 14px; color: #1a3d6e;'>" + subject + "</td></tr>" if subject else ""}
          {"<tr><td style='padding: 8px 0; font-size: 13px; color: #666; vertical-align: top;'>Message</td><td style='padding: 8px 0; font-size: 14px; color: #1a3d6e;'>" + message + "</td></tr>" if message else ""}
        </table>
        <div style="margin-top: 20px; padding: 12px 16px; background: #e6f4ee; border-radius: 8px; font-size: 13px; color: #2a7a5a;">
          Reply directly to this email to respond to {name}.
        </div>
      </div>
    </div>
    """

    payload = json.dumps({
        "from": "AB Tutoring <onboarding@resend.dev>",
        "to": ["contactabtutoring@gmail.com"],
        "reply_to": email,
        "subject": f"New Consultation Request — {name}",
        "html": html_body
    }).encode("utf-8")

    req = urllib.request.Request(
        "https://api.resend.com/emails",
        data=payload,
        headers={
            "Authorization": f"Bearer {os.environ['RESEND_API_KEY']}",
            "Content-Type": "application/json"
        },
        method="POST"
    )

    with urllib.request.urlopen(req) as resp:
        resp.read()

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True})
    }