import pizzaImg from '../../assets/emojione_pizza.png';
function AuthPagesLeftSide() {
    return (
        <div className="hidden md:flex w-1/2 bg-[#FF9921] items-center justify-center">
            <img src={pizzaImg} alt="Pizza" className="w-[305px] h-[300px] " />
        </div>
    );
}
export default AuthPagesLeftSide;
