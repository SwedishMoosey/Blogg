const Title = () => {
    return (
        <div className="relative inline-block">
            <h1 className="text-white text-8xl font-bold">Blögg</h1>
            <div className="absolute -left-4 -bottom-10 w-96 h-2 bg-green-600"></div>
            <div>
                <div className="absolute -right-28 -bottom-12 transform rotate-45 w-6 h-6 bg-green-600"></div>
            </div>
        </div>
    );
};

export default Title;