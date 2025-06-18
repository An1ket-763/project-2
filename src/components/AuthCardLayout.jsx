const AuthCardLayout = ({ title, subtitle, children, footer }) => (
    <div className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center" style={{ backgroundImage: 'url("/bgimg-1.jpg")' }}>
        <div className="w-full max-w-md">
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
                    <p className="text-gray-600 mt-2">{subtitle}</p>
                </div>
                {children}
                {footer && <div className="mt-4">{footer}</div>}
            </div>
        </div>
    </div>
);

export default AuthCardLayout;
