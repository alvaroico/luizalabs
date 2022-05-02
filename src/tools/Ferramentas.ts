export const MascaraCEP = (CEPMascarado: string) => {
  return CEPMascarado.toString().replace(
    /^([\d]{2})([\d]{3})([\d]{3})|^[\d]{2}.[\d]{3}-[\d]{3}/,
    "$1.$2-$3"
  );
};
