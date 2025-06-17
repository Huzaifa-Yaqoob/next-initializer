async function Public() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <div className={'flex-grow'}>Public</div>;
}

export default Public;
