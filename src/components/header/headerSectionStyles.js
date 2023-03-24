import styled from "styled-components";

export const Header = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: center;
	/* align-items: center; */

	border: 1px solid grey;
	background-color: #f4f2ef;
	border-radius: 5px;
	padding: 20px 0;
	@media (max-width: 830px) {
		padding: 15px 0;
	}
	@media (max-width: 630px) {
		padding: 10px 0;
	}
`;

export const Title = styled.h1`
	font-size: 48px;
	color: #000;
	font-weight: 700;
	text-align: center;
	margin-bottom: 35px;

	@media (max-width: 1180px) {
		font-size: 42px;
		margin-bottom: 30px;
	}
	@media (max-width: 1000px) {
		font-size: 35px;
		margin-bottom: 25px;
	}
	@media (max-width: 830px) {
		font-size: 30px;
		margin-bottom: 20px;
	}
	@media (max-width: 830px) {
		font-size: 26px;
		margin-bottom: 10px;
	}
	@media (max-width: 490px) {
		font-size: 22px;
	}
	@media (max-width: 420px) {
		font-size: 18px;
		margin-bottom: 6px;
	}
`;

export const SearchFiltersBlock = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 60px;

	@media (max-width: 1180px) {
		padding: 0 45px;
	}
	@media (max-width: 1000px) {
		padding: 0 28px;
	}
	@media (max-width: 830px) {
		flex-direction: column;
		padding: 0 25px;
	}
	@media (max-width: 830px) {
		padding: 0 15px;
	}
	@media (max-width: 490px) {
		padding: 0 10px;
	}
	@media (max-width: 420px) {
		padding: 0 5px;
	}
`;

export const SearchForm = styled.form`
	display: flex;
	position: relative;
	width: 35%;

	@media (max-width: 1300px) {
		margin-right: 20px;
	}
	@media (max-width: 1000px) {
		margin-right: 12px;
	}
	@media (max-width: 830px) {
		width: 50%;
		margin-right: 0;
		margin-bottom: 15px;
	}
	@media (max-width: 630px) {
		width: 45%;
	}
	@media (max-width: 490px) {
		width: 40%;
	}
	@media (max-width: 490px) {
		margin-bottom: 8px;
	}
	@media (max-width: 420px) {
		width: 35%;
		margin-bottom: 5px;
	}
`;

export const SearchInput = styled.input`
	height: 50px;
	width: 100%;
	padding: 10px;
	border: 1px solid grey;
	border-radius: 5px;

	&:hover,
	&:focus {
		border-color: #c19a6b;
	}

	@media (max-width: 1300px) {
		height: 40px;
	}
	@media (max-width: 1180px) {
		font-size: 18px;
	}
	@media (max-width: 830px) {
		height: 35px;
		font-size: 15px;
	}
	@media (max-width: 630px) {
		height: 25px;
		padding: 7px;
		font-size: 13px;
	}
	@media (max-width: 490px) {
		height: 18px;
		font-size: 10px;
	}
	@media (max-width: 420px) {
		height: 15px;
		padding: 4px;
		font-size: 8px;
	}
`;

export const SearchButton = styled.button`
	width: 50px;
	height: 50px;
	float: right;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #fff;

	border: 1px solid grey;
	border-left: none;
	cursor: pointer;
	border-radius: 5px;
	opacity: 1;
	transition: all 0.5s ease;

	@media (max-width: 1300px) {
		height: 40px;
		width: 40px;
	}
	@media (max-width: 830px) {
		height: 35px;
		width: 35px;
	}
	@media (max-width: 630px) {
		height: 25px;
		width: 25px;
	}
	@media (max-width: 490px) {
		width: 18px;
		height: 18px;
	}
	@media (max-width: 420px) {
		width: 15px;
		height: 15px;
	}

	&:hover {
		opacity: 0.5;
		border: 1px solid black;
		border-left: none;
		border-color: #c19a6b;
	}

	& img {
		width: 70%;
		@media (max-width: 1180px) {
			width: 60%;
		}
		@media (max-width: 1000px) {
			width: 50%;
		}
	}
`;

export const Filters = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const CategoriesForm = styled.form`
	margin-right: 30px;
	display: flex;
	align-items: center;

	@media (max-width: 1180px) {
		margin-right: 20px;
	}
	@media (max-width: 1000px) {
		margin-right: 10px;
	}
	@media (max-width: 830px) {
		margin-right: 30px;
	}
	@media (max-width: 630px) {
		margin-right: 15px;
	}
	@media (max-width: 490px) {
		margin-right: 10px;
	}

	& label {
		margin-right: 15px;
		@media (max-width: 1180px) {
			font-size: 18px;
		}
		@media (max-width: 1000px) {
			margin-right: 8px;
		}
		@media (max-width: 830px) {
			font-size: 15px;
			margin-right: 5px;
		}
		@media (max-width: 630px) {
			font-size: 13px;
		}
		@media (max-width: 490px) {
			font-size: 10px;
		}
		@media (max-width: 420px) {
			font-size: 8px;
		}
	}

	& select {
		cursor: pointer;
		height: 50px;
		width: 100%;
		padding: 10px;
		border-radius: 5px;
		&:hover,
		&:focus {
			border-color: #c19a6b;
		}
		@media (max-width: 1300px) {
			padding: 4px;
			height: 40px;
		}
		@media (max-width: 1180px) {
			font-size: 18px;
		}
		@media (max-width: 830px) {
			height: 35px;
			font-size: 15px;
			padding: 2px;
		}
		@media (max-width: 630px) {
			font-size: 13px;
			height: 25px;
		}
		@media (max-width: 490px) {
			font-size: 10px;
			height: 18px;
		}
		@media (max-width: 420px) {
			height: 15px;
			font-size: 8px;
			padding: 1px;
		}
	}
`;

export const SortingForm = styled.form`
	display: flex;
	align-items: center;
	& label {
		margin-right: 15px;
		width: 150px;
		@media (max-width: 1180px) {
			font-size: 18px;
		}
		@media (max-width: 1000px) {
			margin-right: 5px;
			width: 125px;
		}
		@media (max-width: 830px) {
			font-size: 15px;
			width: 100px;
		}
		@media (max-width: 630px) {
			font-size: 13px;
		}
		@media (max-width: 490px) {
			font-size: 10px;
			width: 65px;
		}
		@media (max-width: 420px) {
			font-size: 8px;
			width: 50px;
		}
	}

	& select {
		cursor: pointer;
		height: 50px;

		width: 100%;
		padding: 10px;
		border-radius: 5px;
		&:hover,
		&:focus {
			border-color: #c19a6b;
		}
		@media (max-width: 1300px) {
			padding: 4px;
			height: 40px;
		}
		@media (max-width: 1180px) {
			font-size: 18px;
		}
		@media (max-width: 830px) {
			height: 35px;
			font-size: 15px;
		}
		@media (max-width: 630px) {
			height: 25px;
			font-size: 13px;
		}
		@media (max-width: 490px) {
			height: 18px;
			font-size: 10px;
			padding: 2px;
		}
		@media (max-width: 420px) {
			height: 15px;
			font-size: 8px;
			padding: 1px;
		}
	}
`;

export const ErrorText = styled.div`
	color: red;
	font-size: 15px;
	font-weight: 700;
	position: absolute;
	top: -25px;
	left: 50%;
	transform: translateX(-50%);
`;
