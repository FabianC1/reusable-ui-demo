import { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [darkMode, setDarkMode] = useState(false);

    const handleLogin = () => {
        null;
    };

    return (
        <div className={`${darkMode ? 'dark' : ''}`}>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4 transition-colors duration-300">
                {/* Toggle Button */}
                <button
                    onClick={() => setDarkMode(prev => !prev)}
                    className="absolute top-4 right-4 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded transition-colors duration-500"
                >
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>

                <div className="bg-white dark:bg-gray-800 border border-gray-800 dark:border-white p-8 rounded-lg shadow-md w-full max-w-sm transition-colors duration-500">


                    <h1 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Login</h1>
                    <div className="space-y-4">
                        <Input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <Button onClick={handleLogin}>Log In</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
