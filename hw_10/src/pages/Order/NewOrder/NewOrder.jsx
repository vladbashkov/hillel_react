import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSelector } from "react-redux";
import * as Yup from "yup";

const validationSchema = Yup.object({
	name: Yup.string().required("Name is required"),
	phone: Yup.string()
		.matches(/^[0-9]{10}$/, "Phone number must be only digits and not more than 10")
		.required("Phone number is required"),
	address: Yup.string().required("Address is required"),
	prioritize: Yup.boolean(),
});

const NewOrder = () => {
	const cart = useSelector((store) => store.cart);
	const { items, totalItems, totalPrice } = cart;

	return (
		<div className="order">
			<h1 className="order_title">Ready to order? Let's go!</h1>
			<Formik
				initialValues={{
					name: "",
					phone: "",
					address: "",
					prioritize: false,
					items,
					totalItems,
					totalPrice,
				}}
				validationSchema={validationSchema}
				onSubmit={(values) => console.log(values)}
			>
				{({ isSubmitting }) => (
					<Form className="order_form">
						<div className="order_form-item">
							<label>First name</label>
							<Field type="text" name="name" />
							<ErrorMessage name="name" component="span" />
						</div>
						<div className="order_form-item">
							<label>Phone number</label>
							<Field type="text" name="phone" />
							<ErrorMessage name="phone" component="span" />
						</div>
						<div className="order_form-item">
							<label>Address</label>
							<Field type="text" name="address" />
							<ErrorMessage name="address" component="span" />
						</div>
						<div className="order_form-item">
							<label>
								<Field type="checkbox" name="prioritize" />
								<p>Prioritize Order</p>
							</label>
						</div>
						<button type="submit" disabled={isSubmitting}>
							Submit
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default NewOrder;
