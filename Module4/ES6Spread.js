const user = {
	nomes: ["Guilherme", "Larissa", "Lauren", "Grace", "Logan"],
	empresa: {
		nome: "Coder",
		site: "www.coder.com.br"
	}
};

const { nomes } = user;
console.log(nomes); 

const nomes1 = user.nomes;
console.log(nomes1); 

const { nomes: nomes2 } = user;

console.log([...nomes2, "Jully"]);

const novoArr = [...nomes2, "Jully"];
console.log(novoArr);

const {
	empresa: { site }
} = user;
console.log(site); 