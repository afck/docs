initSidebarItems({"type":[["fann_callback_type","This callback function can be called during training when using `fann_train_on_data`, `fann_train_on_file` or `fann_cascadetrain_on_data`."],["fann_type","`fann_type` is the type used for the weights, inputs and outputs of the neural network. In the Rust bindings, it is currently always defined as `c_float`."]],"static":[["fann_default_error_log",""]],"struct":[["fann","The fast artificial neural network (`fann`) structure."],["fann_connection","Describes a connection between two neurons and its weight."],["fann_error","Structure used to store error-related information, both `fann` and `fann_train_data` can be cast to this type."],["fann_train_data","Structure used to store data, for use with training."]],"enum":[["fann_activationfunc_enum","The activation functions used for the neurons during training. The activation functions can either be defined for a group of neurons by `fann_set_activation_function_hidden` and `fann_set_activation_function_output`, or it can be defined for a single neuron by `fann_set_activation_function`."],["fann_errno_enum","Error events on fann and fann_train_data."],["fann_errorfunc_enum","Error function used during training."],["fann_nettype_enum","Definition of network types used by `fann_get_network_type`."],["fann_stopfunc_enum","Stop criteria used during training."],["fann_train_enum","The Training algorithms used when training on `fann_train_data` with functions like `fann_train_on_data` or `fann_train_on_file`. The incremental training alters the weights after each time it is presented an input pattern, while batch only alters the weights once after it has been presented to all the patterns."]],"fn":[["fann_cascadetrain_on_data","Trains on an entire dataset, for a period of time using the Cascade2 training algorithm. This algorithm adds neurons to the neural network while training, which means that it needs to start with an ANN without any hidden layers. The neural network should also use shortcut connections, so `fann_create_shortcut` should be used to create the ANN like this:"],["fann_cascadetrain_on_file","Does the same as `fann_cascadetrain_on_data`, but reads the training data directly from a file."],["fann_clear_scaling_params","Clears scaling parameters."],["fann_create_from_file","Constructs a backpropagation neural network from a configuration file, which has been saved by `fann_save`."],["fann_create_shortcut","Creates a standard backpropagation neural network, which is not fully connected and which also has shortcut connections."],["fann_create_shortcut_array","Just like `fann_create_shortcut`, but with an array of layer sizes instead of individual parameters."],["fann_create_sparse","Creates a standard backpropagation neural network, which is not fully connected."],["fann_create_sparse_array","Just like `fann_create_sparse`, but with an array of layer sizes instead of individual parameters."],["fann_create_standard","Creates a standard fully connected backpropagation neural network."],["fann_create_standard_array","Just like `fann_create_standard`, but with an array of layer sizes instead of individual parameters."],["fann_create_train_from_callback","Creates the training data struct from a user supplied function.  As the training data are numerable (data 1, data 2...), the user must write  a function that receives the number of the training data set (input,output)  and returns the set."],["fann_descale_input","Scale data in input vector after getting it from the ANN based on previously calculated parameters."],["fann_descale_output","Scale data in output vector after getting it from the ANN based on previously calculated parameters."],["fann_descale_train","Descale input and output data based on previously calculated parameters."],["fann_destroy","Destroys the entire network, properly freeing all the associated memory."],["fann_destroy_train","Destructs the training data and properly deallocates all of the associated data. Be sure to call this function when finished using the training data."],["fann_duplicate_train_data","Returns an exact copy of a `fann_train_data`."],["fann_get_MSE","Reads the mean square error from the network."],["fann_get_activation_function","Get the activation function for neuron number `neuron` in layer number `layer`, counting the input layer as layer 0."],["fann_get_activation_steepness","Get the activation steepness for neuron number `neuron` in layer number `layer`, counting the input layer as layer 0."],["fann_get_bias_array","Get the number of bias in each layer in the network."],["fann_get_bit_fail","The number of fail bits; means the number of output neurons which differ more than the bit fail limit (see `fann_get_bit_fail_limit`, `fann_set_bit_fail_limit`). The bits are counted in all of the training data, so this number can be higher than the number of training data."],["fann_get_bit_fail_limit","Returns the bit fail limit used during training."],["fann_get_cascade_activation_functions","The cascade activation functions array is an array of the different activation functions used by the candidates."],["fann_get_cascade_activation_functions_count","The number of activation functions in the `fann_get_cascade_activation_functions` array."],["fann_get_cascade_activation_steepnesses","The cascade activation steepnesses array is an array of the different activation functions used by the candidates."],["fann_get_cascade_activation_steepnesses_count","The number of activation steepnesses in the `fann_get_cascade_activation_functions` array."],["fann_get_cascade_candidate_change_fraction","The cascade candidate change fraction is a number between 0 and 1 determining how large a fraction the `fann_get_MSE` value should change within `fann_get_cascade_candidate_stagnation_epochs` during training of the candidate neurons, in order for the training not to stagnate. If the training stagnates, the training of the candidate neurons will be ended and the best candidate will be selected."],["fann_get_cascade_candidate_limit","The candidate limit is a limit for how much the candidate neuron may be trained. The limit is a limit on the proportion between the MSE and candidate score."],["fann_get_cascade_candidate_stagnation_epochs","The number of cascade candidate stagnation epochs determines the number of epochs training is allowed to continue without changing the MSE by a fraction of `fann_get_cascade_candidate_change_fraction`."],["fann_get_cascade_max_cand_epochs","The maximum candidate epochs determines the maximum number of epochs the input connections to the candidates may be trained before adding a new candidate neuron."],["fann_get_cascade_max_out_epochs","The maximum out epochs determines the maximum number of epochs the output connections may be trained after adding a new candidate neuron."],["fann_get_cascade_num_candidate_groups","The number of candidate groups is the number of groups of identical candidates which will be used during training."],["fann_get_cascade_num_candidates","The number of candidates used during training (calculated by multiplying `fann_get_cascade_activation_functions_count`, `fann_get_cascade_activation_steepnesses_count` and `fann_get_cascade_num_candidate_groups`)."],["fann_get_cascade_output_change_fraction","The cascade output change fraction is a number between 0 and 1 determining how large a fraction the `fann_get_MSE` value should change within `fann_get_cascade_output_stagnation_epochs` during training of the output connections, in order for the training not to stagnate. If the training stagnates, the training of the output connections will be ended and new candidates will be prepared."],["fann_get_cascade_output_stagnation_epochs","The number of cascade output stagnation epochs determines the number of epochs training is allowed to continue without changing the MSE by a fraction of `fann_get_cascade_output_change_fraction`."],["fann_get_cascade_weight_multiplier","The weight multiplier is a parameter which is used to multiply the weights from the candidate neuron before adding the neuron to the neural network. This parameter is usually between 0 and 1, and is used to make the training a bit less aggressive."],["fann_get_connection_array","Get the connections in the network."],["fann_get_connection_rate","Get the connection rate used when the network was created."],["fann_get_errno","Returns the last error number."],["fann_get_errstr","Returns the last error string."],["fann_get_layer_array","Get the number of neurons in each layer in the network."],["fann_get_learning_momentum","Get the learning momentum."],["fann_get_learning_rate","Return the learning rate."],["fann_get_network_type","Get the type of neural network it was created as."],["fann_get_num_input","Get the number of input neurons."],["fann_get_num_layers","Get the number of layers in the network."],["fann_get_num_output","Get the number of output neurons."],["fann_get_quickprop_decay","The decay is a small negative valued number which is the factor that the weights should become smaller in each iteration during quickprop training. This is used to make sure that the weights do not become too high during training."],["fann_get_quickprop_mu","The mu factor is used to increase and decrease the step size during quickprop training. The mu factor should always be above 1, since it would otherwise decrease the step size when it was supposed to increase it."],["fann_get_rprop_decrease_factor","The decrease factor is a value smaller than 1, which is used to decrease the step size during RPROP training."],["fann_get_rprop_delta_max","The maximum step size is a positive number determining how large the maximum step size may be."],["fann_get_rprop_delta_min","The minimum step size is a small positive number determining how small the minimum step size may be."],["fann_get_rprop_delta_zero","The initial step size is a positive number determining the initial step size."],["fann_get_rprop_increase_factor","The increase factor is a value larger than 1, which is used to increase the step size during RPROP training."],["fann_get_total_connections","Get the total number of connections in the entire network."],["fann_get_total_neurons","Get the total number of neurons in the entire network. This number does also include the bias neurons, so a 2-4-2 network has 2+4+2 +2(bias) = 10 neurons."],["fann_get_train_error_function","Returns the error function used during training."],["fann_get_train_stop_function","Returns the the stop function used during training."],["fann_get_training_algorithm","Return the training algorithm as described by `fann_train_enum`. This training algorithm is used by `fann_train_on_data` and associated functions."],["fann_get_user_data","Get a pointer to user defined data that was previously set with `fann_set_user_data`. It is the user's responsibility to allocate and deallocate any data that the pointer might point to."],["fann_init_weights","Initialize the weights using Widrow + Nguyen's algorithm."],["fann_length_train_data","Returns the number of training patterns in the `fann_train_data`."],["fann_merge_train_data","Merges the data from `data1` and `data2` into a new `fann_train_data`."],["fann_num_input_train_data","Returns the number of inputs in each of the training patterns in the `fann_train_data`."],["fann_num_output_train_data","Returns the number of outputs in each of the training patterns in the `fann_train_data`."],["fann_print_connections","Prints the connections of the ann in a compact matrix, for easy viewing of the internals of the ANN."],["fann_print_error","Prints the last error to `stderr`."],["fann_print_parameters","Prints all of the parameters and options of the ANN."],["fann_randomize_weights","Give each connection a random weight between `min_weight` and `max_weight`."],["fann_read_train_from_file","Reads a file that stores training data."],["fann_reset_MSE","Resets the mean square error from the network."],["fann_reset_errno","Resets the last error number."],["fann_reset_errstr","Resets the last error string."],["fann_run","Runs input through the neural network, returning an array of outputs, the number of which being equal to the number of neurons in the output layer."],["fann_save","Save the entire network to a configuration file."],["fann_save_to_fixed","Saves the entire network to a configuration file. But it is saved in fixed point format no matter which format it is currently in."],["fann_save_train","Save the training structure to a file, with the format specified in `fann_read_train_from_file`"],["fann_save_train_to_fixed","Saves the training structure to a fixed point data file."],["fann_scale_input","Scale data in input vector before feeding it to the ANN based on previously calculated parameters."],["fann_scale_input_train_data","Scales the inputs in the training data to the specified range."],["fann_scale_output","Scale data in output vector before feeding it to the ANN based on previously calculated parameters."],["fann_scale_output_train_data","Scales the outputs in the training data to the specified range."],["fann_scale_train","Scale input and output data based on previously calculated parameters."],["fann_scale_train_data","Scales the inputs and outputs in the training data to the specified range."],["fann_set_activation_function","Set the activation function for neuron number `neuron` in layer number `layer`, counting the input layer as layer 0."],["fann_set_activation_function_hidden","Set the activation function for all of the hidden layers."],["fann_set_activation_function_layer","Set the activation function for all the neurons in the layer number `layer`, counting the input layer as layer 0."],["fann_set_activation_function_output","Set the activation function for the output layer."],["fann_set_activation_steepness","Set the activation steepness for neuron number `neuron` in layer number `layer`, counting the input layer as layer 0."],["fann_set_activation_steepness_hidden","Set the steepness of the activation steepness in all of the hidden layers."],["fann_set_activation_steepness_layer","Set the activation steepness for all neurons in layer number `layer`, counting the input layer as layer 0."],["fann_set_activation_steepness_output","Set the steepness of the activation steepness in the output layer."],["fann_set_bit_fail_limit","Set the bit fail limit used during training."],["fann_set_callback","Sets the callback function for use during training."],["fann_set_cascade_activation_functions","Sets the array of cascade candidate activation functions. The array must be just as long as defined by the count."],["fann_set_cascade_activation_steepnesses","Sets the array of cascade candidate activation steepnesses. The array must be just as long as defined by the count."],["fann_set_cascade_candidate_change_fraction","Sets the cascade candidate change fraction."],["fann_set_cascade_candidate_limit","Sets the candidate limit."],["fann_set_cascade_candidate_stagnation_epochs","Sets the number of cascade candidate stagnation epochs."],["fann_set_cascade_max_cand_epochs","Sets the max candidate epochs."],["fann_set_cascade_max_out_epochs","Sets the maximum out epochs."],["fann_set_cascade_num_candidate_groups","Sets the number of candidate groups."],["fann_set_cascade_output_change_fraction","Sets the cascade output change fraction."],["fann_set_cascade_output_stagnation_epochs","Sets the number of cascade output stagnation epochs."],["fann_set_cascade_weight_multiplier","Sets the weight multiplier."],["fann_set_error_log","Change where errors are logged to. Both `fann` and `fann_data` can be cast to `fann_error`, so this function can be used to set either of these."],["fann_set_input_scaling_params","Calculate input scaling parameters for future use based on training data."],["fann_set_learning_momentum","Set the learning momentum."],["fann_set_learning_rate","Set the learning rate."],["fann_set_output_scaling_params","Calculate output scaling parameters for future use based on training data."],["fann_set_quickprop_decay","Sets the quickprop decay factor."],["fann_set_quickprop_mu","Sets the quickprop mu factor."],["fann_set_rprop_decrease_factor","The decrease factor is a value smaller than 1, which is used to decrease the step size during RPROP training."],["fann_set_rprop_delta_max","The maximum step size is a positive number determining how large the maximum step size may be."],["fann_set_rprop_delta_min","The minimum step size is a small positive number determining how small the minimum step size may be."],["fann_set_rprop_delta_zero","The initial step size is a positive number determining the initial step size."],["fann_set_rprop_increase_factor","The increase factor used during RPROP training."],["fann_set_scaling_params","Calculate input and output scaling parameters for future use based on training data."],["fann_set_train_error_function","Set the error function used during training."],["fann_set_train_stop_function","Set the stop function used during training."],["fann_set_training_algorithm","Set the training algorithm."],["fann_set_user_data","Store a pointer to user defined data. The pointer can be retrieved with `fann_get_user_data` for example in a callback. It is the user's responsibility to allocate and deallocate any data that the pointer might point to."],["fann_set_weight","Set a connection in the network."],["fann_set_weight_array","Set connections in the network."],["fann_shuffle_train_data","Shuffles training data, randomizing the order. This is recommended for incremental training, while it has no influence during batch training."],["fann_subset_train_data","Returns an copy of a subset of the `fann_train_data`, starting at position `pos` and `length` elements forward."],["fann_test","Test with a set of inputs, and a set of desired outputs. This operation updates the mean square error, but does not change the network in any way."],["fann_test_data","Test a set of training data and calculates the MSE for the training data."],["fann_train","Train one iteration with a set of inputs, and a set of desired outputs. This training is always incremental training (see `fann_train_enum`), since only one pattern is presented."],["fann_train_epoch","Train one epoch with a set of training data."],["fann_train_on_data","Trains on an entire dataset, for a period of time."],["fann_train_on_file","Does the same as `fann_train_on_data`, but reads the training data directly from a file."]]});