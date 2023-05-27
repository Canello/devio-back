exports.errorHandler = (err, req, res, next) => {
    // console.log(err);

    res.status(500).send({
        status: "failed",
        error: "Alguma coisa deu errado.",
    });
};
