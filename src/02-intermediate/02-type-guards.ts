interface Order {
  address: string,
}
interface TelephoneOrder extends Order {
  callerNumber: string,
}
interface InternetOrder extends Order {
  email: string,
}

type PossibleOrders = TelephoneOrder | InternetOrder | undefined;

function isInternetOrder(order: PossibleOrders): order is InternetOrder {
  return !!order && "email" in order;
}

function isTelephoneOrder(order: PossibleOrders): order is TelephoneOrder {
  return !!order && "callerNumber" in order;
}

function makeOrder(order: PossibleOrders) {
  if (isInternetOrder(order)) {
    console.log(order.email);
  } else if (isTelephoneOrder(order)) {
    console.log(order.callerNumber);
  }
}