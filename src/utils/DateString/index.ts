export function epochToHour(epochNum: number): string {
  let myDate: Date = new Date(epochNum * 1000);
  if (myDate.getHours() <= 9 && myDate.getHours() >= 0) {
    return "0" + myDate.getHours() + ":00";
  } else {
    return myDate.getHours() + ":00";
  }
}

export function epochToDay(epochNum: number): string {
  let myDate: Date = new Date(epochNum * 1000);
  let options: Intl.DateTimeFormatOptions = { weekday: "long" };
  let diaSemana: string = new Intl.DateTimeFormat("pt-BR", options).format(
    myDate
  );
  return diaSemana.trim().replace(/^\w/, (c) => c.toUpperCase());
}
