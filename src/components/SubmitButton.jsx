const SubmitButton = ({ isLoading, disabled, text }) => (
    <button
        type="submit"
        disabled={isLoading || disabled}
        className={`w-1/2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors ${isLoading || disabled ? 'opacity-70 cursor-not-allowed' : ''}`}
        style={{
            background: 'linear-gradient(90deg, #3b82f6 0%, #ec4899 100%)'
        }}
    >
        {isLoading ? (
            <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Loading...
            </span>
        ) : (
            text
        )}
    </button>
);

export default SubmitButton;
