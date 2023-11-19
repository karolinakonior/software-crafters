function windmill(farm) {
  let boolean = true;
  let horizontalArray = [];
  const diagonalCounts = [];

  for (let i = 0; i < farm.length; i++) {
    horizontalArray.push([])
    farm.forEach((row) => {
      const farm = row[0].split("")
      horizontalArray[i].push(farm[i])
    })
  }

  horizontalArray.some((row) => {
    const horizontalCounts = {};

    row.forEach((x) => {
      horizontalCounts[x] = (horizontalCounts[x] || 0) + 1;
    });

    if (horizontalCounts["+"] !== 1) {
      boolean = false
    }
  })

  farm.some((row) => {
    const farmArray = row[0].split("")
    const verticalCounts = {};

    farmArray.forEach((x, index) => {
      verticalCounts[x] = (verticalCounts[x] || 0) + 1;
      if (x === "+") {
        diagonalCounts.push(index)
      }
    });

    if (verticalCounts["+"] !== 1) {
      boolean = false
    }

  })


  for (let i = 0; i < diagonalCounts.length; ++i) {
    let difference = diagonalCounts[i + 1] - diagonalCounts[i];
    if (difference === 1 || difference === -1) {
      boolean = false;
    }
  }

  return boolean;
}

module.exports = windmill;

