export function toLocalDAteString(date:string) {
    const options = {
      // weekday: "long",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString("fa-IR", options);
  }
  export function toLocalDateStringShort(date:string) {
    return new Date(date).toLocaleDateString("fa-IR");
  }
  