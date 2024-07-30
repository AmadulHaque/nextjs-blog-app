import { getSession } from '@/lib/session';

export default async function handler(req, res) {
  const session = await getSession();

  // Check if the user is authenticated
  if (!session.isLoggedIn) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Handle the API request if authenticated
  res.status(200).json({ message: 'This is protected content' });
}
