// Original file: ../specification/grpc/a2a.proto

/**
 * A2AService defines the gRPC version of the A2A protocol. This has a slightly
 * different shape than the JSONRPC version to better conform to AIP-127,
 * where appropriate. The nouns are AgentCard, Message, Task and
 * TaskPushNotificationConfig.
 * - Messages are not a standard resource so there is no get/delete/update/list
 * interface, only a send and stream custom methods.
 * - Tasks have a get interface and custom cancel and subscribe methods.
 * - TaskPushNotificationConfig are a resource whose parent is a task.
 * They have get, list and create methods.
 * - AgentCard is a static resource with only a get method.
 */
export interface A2AServiceClient extends grpc.Client {
  /**
   * Cancel a task from the agent. If supported one should expect no
   * more task updates for the task.
   */
  CancelTask(
    argument: _a2a_v1_CancelTaskRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_a2a_v1_Task__Output>
  ): grpc.ClientUnaryCall;
  CancelTask(
    argument: _a2a_v1_CancelTaskRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_a2a_v1_Task__Output>
  ): grpc.ClientUnaryCall;
  CancelTask(
    argument: _a2a_v1_CancelTaskRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_a2a_v1_Task__Output>
  ): grpc.ClientUnaryCall;
  CancelTask(
    argument: _a2a_v1_CancelTaskRequest,
    callback: grpc.requestCallback<_a2a_v1_Task__Output>
  ): grpc.ClientUnaryCall;
  /**
   * Cancel a task from the agent. If supported one should expect no
   * more task updates for the task.
   */
  cancelTask(
    argument: _a2a_v1_CancelTaskRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_a2a_v1_Task__Output>
  ): grpc.ClientUnaryCall;
  cancelTask(
    argument: _a2a_v1_CancelTaskRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_a2a_v1_Task__Output>
  ): grpc.ClientUnaryCall;
  cancelTask(
    argument: _a2a_v1_CancelTaskRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_a2a_v1_Task__Output>
  ): grpc.ClientUnaryCall;
  cancelTask(
    argument: _a2a_v1_CancelTaskRequest,
    callback: grpc.requestCallback<_a2a_v1_Task__Output>
  ): grpc.ClientUnaryCall;

  /**
   * Set a push notification config for a task.
   */
  CreateTaskPushNotificationConfig(
    argument: _a2a_v1_CreateTaskPushNotificationConfigRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_a2a_v1_TaskPushNotificationConfig__Output>
  ): grpc.ClientUnaryCall;
  CreateTaskPushNotificationConfig(
    argument: _a2a_v1_CreateTaskPushNotificationConfigRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_a2a_v1_TaskPushNotificationConfig__Output>
  ): grpc.ClientUnaryCall;
  CreateTaskPushNotificationConfig(
    argument: _a2a_v1_CreateTaskPushNotificationConfigRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_a2a_v1_TaskPushNotificationConfig__Output>
  ): grpc.ClientUnaryCall;
  CreateTaskPushNotificationConfig(
    argument: _a2a_v1_CreateTaskPushNotificationConfigRequest,
    callback: grpc.requestCallback<_a2a_v1_TaskPushNotificationConfig__Output>
  ): grpc.ClientUnaryCall;
  /**
   * Set a push notification config for a task.
   */
  createTaskPushNotificationConfig(
    argument: _a2a_v1_CreateTaskPushNotificationConfigRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_a2a_v1_TaskPushNotificationConfig__Output>
  ): grpc.ClientUnaryCall;
  createTaskPushNotificationConfig(
    argument: _a2a_v1_CreateTaskPushNotificationConfigRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_a2a_v1_TaskPushNotificationConfig__Output>
  ): grpc.ClientUnaryCall;
  createTaskPushNotificationConfig(
    argument: _a2a_v1_CreateTaskPushNotificationConfigRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_a2a_v1_TaskPushNotificationConfig__Output>
  ): grpc.ClientUnaryCall;
  createTaskPushNotificationConfig(
    argument: _a2a_v1_CreateTaskPushNotificationConfigRequest,
    callback: grpc.requestCallback<_a2a_v1_TaskPushNotificationConfig__Output>
  ): grpc.ClientUnaryCall;

  /**
   * Delete a push notification config for a task.
   */
  DeleteTaskPushNotificationConfig(
    argument: _a2a_v1_DeleteTaskPushNotificationConfigRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteTaskPushNotificationConfig(
    argument: _a2a_v1_DeleteTaskPushNotificationConfigRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteTaskPushNotificationConfig(
    argument: _a2a_v1_DeleteTaskPushNotificationConfigRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  DeleteTaskPushNotificationConfig(
    argument: _a2a_v1_DeleteTaskPushNotificationConfigRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  /**
   * Delete a push notification config for a task.
   */
  deleteTaskPushNotificationConfig(
    argument: _a2a_v1_DeleteTaskPushNotificationConfigRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteTaskPushNotificationConfig(
    argument: _a2a_v1_DeleteTaskPushNotificationConfigRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteTaskPushNotificationConfig(
    argument: _a2a_v1_DeleteTaskPushNotificationConfigRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  deleteTaskPushNotificationConfig(
    argument: _a2a_v1_DeleteTaskPushNotificationConfigRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;

  /**
   * GetAgentCard returns the agent card for the agent.
   */
  GetAgentCard(
    argument: _a2a_v1_GetAgentCardRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_a2a_v1_AgentCard__Output>
  ): grpc.ClientUnaryCall;
  GetAgentCard(
    argument: _a2a_v1_GetAgentCardRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_a2a_v1_AgentCard__Output>
  ): grpc.ClientUnaryCall;
  GetAgentCard(
    argument: _a2a_v1_GetAgentCardRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_a2a_v1_AgentCard__Output>
  ): grpc.ClientUnaryCall;
  GetAgentCard(
    argument: _a2a_v1_GetAgentCardRequest,
    callback: grpc.requestCallback<_a2a_v1_AgentCard__Output>
  ): grpc.ClientUnaryCall;
  /**
   * GetAgentCard returns the agent card for the agent.
   */
  getAgentCard(
    argument: _a2a_v1_GetAgentCardRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_a2a_v1_AgentCard__Output>
  ): grpc.ClientUnaryCall;
  getAgentCard(
    argument: _a2a_v1_GetAgentCardRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_a2a_v1_AgentCard__Output>
  ): grpc.ClientUnaryCall;
  getAgentCard(
    argument: _a2a_v1_GetAgentCardRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_a2a_v1_AgentCard__Output>
  ): grpc.ClientUnaryCall;
  getAgentCard(
    argument: _a2a_v1_GetAgentCardRequest,
    callback: grpc.requestCallback<_a2a_v1_AgentCard__Output>
  ): grpc.ClientUnaryCall;

  /**
   * Get the current state of a task from the agent.
   */
  GetTask(
    argument: _a2a_v1_GetTaskRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_a2a_v1_Task__Output>
  ): grpc.ClientUnaryCall;
  GetTask(
    argument: _a2a_v1_GetTaskRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_a2a_v1_Task__Output>
  ): grpc.ClientUnaryCall;
  GetTask(
    argument: _a2a_v1_GetTaskRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_a2a_v1_Task__Output>
  ): grpc.ClientUnaryCall;
  GetTask(
    argument: _a2a_v1_GetTaskRequest,
    callback: grpc.requestCallback<_a2a_v1_Task__Output>
  ): grpc.ClientUnaryCall;
  /**
   * Get the current state of a task from the agent.
   */
  getTask(
    argument: _a2a_v1_GetTaskRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_a2a_v1_Task__Output>
  ): grpc.ClientUnaryCall;
  getTask(
    argument: _a2a_v1_GetTaskRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_a2a_v1_Task__Output>
  ): grpc.ClientUnaryCall;
  getTask(
    argument: _a2a_v1_GetTaskRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_a2a_v1_Task__Output>
  ): grpc.ClientUnaryCall;
  getTask(
    argument: _a2a_v1_GetTaskRequest,
    callback: grpc.requestCallback<_a2a_v1_Task__Output>
  ): grpc.ClientUnaryCall;

  /**
   * Get a push notification config for a task.
   */
  GetTaskPushNotificationConfig(
    argument: _a2a_v1_GetTaskPushNotificationConfigRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_a2a_v1_TaskPushNotificationConfig__Output>
  ): grpc.ClientUnaryCall;
  GetTaskPushNotificationConfig(
    argument: _a2a_v1_GetTaskPushNotificationConfigRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_a2a_v1_TaskPushNotificationConfig__Output>
  ): grpc.ClientUnaryCall;
  GetTaskPushNotificationConfig(
    argument: _a2a_v1_GetTaskPushNotificationConfigRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_a2a_v1_TaskPushNotificationConfig__Output>
  ): grpc.ClientUnaryCall;
  GetTaskPushNotificationConfig(
    argument: _a2a_v1_GetTaskPushNotificationConfigRequest,
    callback: grpc.requestCallback<_a2a_v1_TaskPushNotificationConfig__Output>
  ): grpc.ClientUnaryCall;
  /**
   * Get a push notification config for a task.
   */
  getTaskPushNotificationConfig(
    argument: _a2a_v1_GetTaskPushNotificationConfigRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_a2a_v1_TaskPushNotificationConfig__Output>
  ): grpc.ClientUnaryCall;
  getTaskPushNotificationConfig(
    argument: _a2a_v1_GetTaskPushNotificationConfigRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_a2a_v1_TaskPushNotificationConfig__Output>
  ): grpc.ClientUnaryCall;
  getTaskPushNotificationConfig(
    argument: _a2a_v1_GetTaskPushNotificationConfigRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_a2a_v1_TaskPushNotificationConfig__Output>
  ): grpc.ClientUnaryCall;
  getTaskPushNotificationConfig(
    argument: _a2a_v1_GetTaskPushNotificationConfigRequest,
    callback: grpc.requestCallback<_a2a_v1_TaskPushNotificationConfig__Output>
  ): grpc.ClientUnaryCall;

  /**
   * Get a list of push notifications configured for a task.
   */
  ListTaskPushNotificationConfig(
    argument: _a2a_v1_ListTaskPushNotificationConfigRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_a2a_v1_ListTaskPushNotificationConfigResponse__Output>
  ): grpc.ClientUnaryCall;
  ListTaskPushNotificationConfig(
    argument: _a2a_v1_ListTaskPushNotificationConfigRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_a2a_v1_ListTaskPushNotificationConfigResponse__Output>
  ): grpc.ClientUnaryCall;
  ListTaskPushNotificationConfig(
    argument: _a2a_v1_ListTaskPushNotificationConfigRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_a2a_v1_ListTaskPushNotificationConfigResponse__Output>
  ): grpc.ClientUnaryCall;
  ListTaskPushNotificationConfig(
    argument: _a2a_v1_ListTaskPushNotificationConfigRequest,
    callback: grpc.requestCallback<_a2a_v1_ListTaskPushNotificationConfigResponse__Output>
  ): grpc.ClientUnaryCall;
  /**
   * Get a list of push notifications configured for a task.
   */
  listTaskPushNotificationConfig(
    argument: _a2a_v1_ListTaskPushNotificationConfigRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_a2a_v1_ListTaskPushNotificationConfigResponse__Output>
  ): grpc.ClientUnaryCall;
  listTaskPushNotificationConfig(
    argument: _a2a_v1_ListTaskPushNotificationConfigRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_a2a_v1_ListTaskPushNotificationConfigResponse__Output>
  ): grpc.ClientUnaryCall;
  listTaskPushNotificationConfig(
    argument: _a2a_v1_ListTaskPushNotificationConfigRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_a2a_v1_ListTaskPushNotificationConfigResponse__Output>
  ): grpc.ClientUnaryCall;
  listTaskPushNotificationConfig(
    argument: _a2a_v1_ListTaskPushNotificationConfigRequest,
    callback: grpc.requestCallback<_a2a_v1_ListTaskPushNotificationConfigResponse__Output>
  ): grpc.ClientUnaryCall;

  /**
   * Send a message to the agent. This is a blocking call that will return the
   * task once it is completed, or a LRO if requested.
   */
  SendMessage(
    argument: _a2a_v1_SendMessageRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_a2a_v1_SendMessageResponse__Output>
  ): grpc.ClientUnaryCall;
  SendMessage(
    argument: _a2a_v1_SendMessageRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_a2a_v1_SendMessageResponse__Output>
  ): grpc.ClientUnaryCall;
  SendMessage(
    argument: _a2a_v1_SendMessageRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_a2a_v1_SendMessageResponse__Output>
  ): grpc.ClientUnaryCall;
  SendMessage(
    argument: _a2a_v1_SendMessageRequest,
    callback: grpc.requestCallback<_a2a_v1_SendMessageResponse__Output>
  ): grpc.ClientUnaryCall;
  /**
   * Send a message to the agent. This is a blocking call that will return the
   * task once it is completed, or a LRO if requested.
   */
  sendMessage(
    argument: _a2a_v1_SendMessageRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_a2a_v1_SendMessageResponse__Output>
  ): grpc.ClientUnaryCall;
  sendMessage(
    argument: _a2a_v1_SendMessageRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_a2a_v1_SendMessageResponse__Output>
  ): grpc.ClientUnaryCall;
  sendMessage(
    argument: _a2a_v1_SendMessageRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_a2a_v1_SendMessageResponse__Output>
  ): grpc.ClientUnaryCall;
  sendMessage(
    argument: _a2a_v1_SendMessageRequest,
    callback: grpc.requestCallback<_a2a_v1_SendMessageResponse__Output>
  ): grpc.ClientUnaryCall;

  /**
   * SendStreamingMessage is a streaming call that will return a stream of
   * task update events until the Task is in an interrupted or terminal state.
   */
  SendStreamingMessage(
    argument: _a2a_v1_SendMessageRequest,
    metadata: grpc.Metadata,
    options?: grpc.CallOptions
  ): grpc.ClientReadableStream<_a2a_v1_StreamResponse__Output>;
  SendStreamingMessage(
    argument: _a2a_v1_SendMessageRequest,
    options?: grpc.CallOptions
  ): grpc.ClientReadableStream<_a2a_v1_StreamResponse__Output>;
  /**
   * SendStreamingMessage is a streaming call that will return a stream of
   * task update events until the Task is in an interrupted or terminal state.
   */
  sendStreamingMessage(
    argument: _a2a_v1_SendMessageRequest,
    metadata: grpc.Metadata,
    options?: grpc.CallOptions
  ): grpc.ClientReadableStream<_a2a_v1_StreamResponse__Output>;
  sendStreamingMessage(
    argument: _a2a_v1_SendMessageRequest,
    options?: grpc.CallOptions
  ): grpc.ClientReadableStream<_a2a_v1_StreamResponse__Output>;

  /**
   * TaskSubscription is a streaming call that will return a stream of task
   * update events. This attaches the stream to an existing in process task.
   * If the task is complete the stream will return the completed task (like
   * GetTask) and close the stream.
   */
  TaskSubscription(
    argument: _a2a_v1_TaskSubscriptionRequest,
    metadata: grpc.Metadata,
    options?: grpc.CallOptions
  ): grpc.ClientReadableStream<_a2a_v1_StreamResponse__Output>;
  TaskSubscription(
    argument: _a2a_v1_TaskSubscriptionRequest,
    options?: grpc.CallOptions
  ): grpc.ClientReadableStream<_a2a_v1_StreamResponse__Output>;
  /**
   * TaskSubscription is a streaming call that will return a stream of task
   * update events. This attaches the stream to an existing in process task.
   * If the task is complete the stream will return the completed task (like
   * GetTask) and close the stream.
   */
  taskSubscription(
    argument: _a2a_v1_TaskSubscriptionRequest,
    metadata: grpc.Metadata,
    options?: grpc.CallOptions
  ): grpc.ClientReadableStream<_a2a_v1_StreamResponse__Output>;
  taskSubscription(
    argument: _a2a_v1_TaskSubscriptionRequest,
    options?: grpc.CallOptions
  ): grpc.ClientReadableStream<_a2a_v1_StreamResponse__Output>;
}

/**
 * A2AService defines the gRPC version of the A2A protocol. This has a slightly
 * different shape than the JSONRPC version to better conform to AIP-127,
 * where appropriate. The nouns are AgentCard, Message, Task and
 * TaskPushNotificationConfig.
 * - Messages are not a standard resource so there is no get/delete/update/list
 * interface, only a send and stream custom methods.
 * - Tasks have a get interface and custom cancel and subscribe methods.
 * - TaskPushNotificationConfig are a resource whose parent is a task.
 * They have get, list and create methods.
 * - AgentCard is a static resource with only a get method.
 */
export interface A2AServiceHandlers extends grpc.UntypedServiceImplementation {
  /**
   * Cancel a task from the agent. If supported one should expect no
   * more task updates for the task.
   */
  CancelTask: grpc.handleUnaryCall<
    _a2a_v1_CancelTaskRequest__Output,
    _a2a_v1_Task
  >;

  /**
   * Set a push notification config for a task.
   */
  CreateTaskPushNotificationConfig: grpc.handleUnaryCall<
    _a2a_v1_CreateTaskPushNotificationConfigRequest__Output,
    _a2a_v1_TaskPushNotificationConfig
  >;

  /**
   * Delete a push notification config for a task.
   */
  DeleteTaskPushNotificationConfig: grpc.handleUnaryCall<
    _a2a_v1_DeleteTaskPushNotificationConfigRequest__Output,
    _google_protobuf_Empty
  >;

  /**
   * GetAgentCard returns the agent card for the agent.
   */
  GetAgentCard: grpc.handleUnaryCall<
    _a2a_v1_GetAgentCardRequest__Output,
    _a2a_v1_AgentCard
  >;

  /**
   * Get the current state of a task from the agent.
   */
  GetTask: grpc.handleUnaryCall<_a2a_v1_GetTaskRequest__Output, _a2a_v1_Task>;

  /**
   * Get a push notification config for a task.
   */
  GetTaskPushNotificationConfig: grpc.handleUnaryCall<
    _a2a_v1_GetTaskPushNotificationConfigRequest__Output,
    _a2a_v1_TaskPushNotificationConfig
  >;

  /**
   * Get a list of push notifications configured for a task.
   */
  ListTaskPushNotificationConfig: grpc.handleUnaryCall<
    _a2a_v1_ListTaskPushNotificationConfigRequest__Output,
    _a2a_v1_ListTaskPushNotificationConfigResponse
  >;

  /**
   * Send a message to the agent. This is a blocking call that will return the
   * task once it is completed, or a LRO if requested.
   */
  SendMessage: grpc.handleUnaryCall<
    _a2a_v1_SendMessageRequest__Output,
    _a2a_v1_SendMessageResponse
  >;

  /**
   * SendStreamingMessage is a streaming call that will return a stream of
   * task update events until the Task is in an interrupted or terminal state.
   */
  SendStreamingMessage: grpc.handleServerStreamingCall<
    _a2a_v1_SendMessageRequest__Output,
    _a2a_v1_StreamResponse
  >;

  /**
   * TaskSubscription is a streaming call that will return a stream of task
   * update events. This attaches the stream to an existing in process task.
   * If the task is complete the stream will return the completed task (like
   * GetTask) and close the stream.
   */
  TaskSubscription: grpc.handleServerStreamingCall<
    _a2a_v1_TaskSubscriptionRequest__Output,
    _a2a_v1_StreamResponse
  >;
}

export interface A2AServiceDefinition extends grpc.ServiceDefinition {
  CancelTask: MethodDefinition<
    _a2a_v1_CancelTaskRequest,
    _a2a_v1_Task,
    _a2a_v1_CancelTaskRequest__Output,
    _a2a_v1_Task__Output
  >;
  CreateTaskPushNotificationConfig: MethodDefinition<
    _a2a_v1_CreateTaskPushNotificationConfigRequest,
    _a2a_v1_TaskPushNotificationConfig,
    _a2a_v1_CreateTaskPushNotificationConfigRequest__Output,
    _a2a_v1_TaskPushNotificationConfig__Output
  >;
  DeleteTaskPushNotificationConfig: MethodDefinition<
    _a2a_v1_DeleteTaskPushNotificationConfigRequest,
    _google_protobuf_Empty,
    _a2a_v1_DeleteTaskPushNotificationConfigRequest__Output,
    _google_protobuf_Empty__Output
  >;
  GetAgentCard: MethodDefinition<
    _a2a_v1_GetAgentCardRequest,
    _a2a_v1_AgentCard,
    _a2a_v1_GetAgentCardRequest__Output,
    _a2a_v1_AgentCard__Output
  >;
  GetTask: MethodDefinition<
    _a2a_v1_GetTaskRequest,
    _a2a_v1_Task,
    _a2a_v1_GetTaskRequest__Output,
    _a2a_v1_Task__Output
  >;
  GetTaskPushNotificationConfig: MethodDefinition<
    _a2a_v1_GetTaskPushNotificationConfigRequest,
    _a2a_v1_TaskPushNotificationConfig,
    _a2a_v1_GetTaskPushNotificationConfigRequest__Output,
    _a2a_v1_TaskPushNotificationConfig__Output
  >;
  ListTaskPushNotificationConfig: MethodDefinition<
    _a2a_v1_ListTaskPushNotificationConfigRequest,
    _a2a_v1_ListTaskPushNotificationConfigResponse,
    _a2a_v1_ListTaskPushNotificationConfigRequest__Output,
    _a2a_v1_ListTaskPushNotificationConfigResponse__Output
  >;
  SendMessage: MethodDefinition<
    _a2a_v1_SendMessageRequest,
    _a2a_v1_SendMessageResponse,
    _a2a_v1_SendMessageRequest__Output,
    _a2a_v1_SendMessageResponse__Output
  >;
  SendStreamingMessage: MethodDefinition<
    _a2a_v1_SendMessageRequest,
    _a2a_v1_StreamResponse,
    _a2a_v1_SendMessageRequest__Output,
    _a2a_v1_StreamResponse__Output
  >;
  TaskSubscription: MethodDefinition<
    _a2a_v1_TaskSubscriptionRequest,
    _a2a_v1_StreamResponse,
    _a2a_v1_TaskSubscriptionRequest__Output,
    _a2a_v1_StreamResponse__Output
  >;
}
// Original file: ../specification/grpc/a2a.proto

import type {
  AgentExtension as _a2a_v1_AgentExtension,
  AgentExtension__Output as _a2a_v1_AgentExtension__Output,
} from "../src/types/a2a/v1/AgentExtension";

/**
 * --8<-- [start:AgentCapabilities]
 * Defines the A2A feature set supported by the agent
 */
export interface AgentCapabilities {
  /**
   * If the agent will support streaming responses
   */
  streaming?: boolean;
  /**
   * If the agent can send push notifications to the clients webhook
   */
  push_notifications?: boolean;
  /**
   * Extensions supported by this agent.
   */
  extensions?: _a2a_v1_AgentExtension[];
}

/**
 * --8<-- [start:AgentCapabilities]
 * Defines the A2A feature set supported by the agent
 */
export interface AgentCapabilities__Output {
  /**
   * If the agent will support streaming responses
   */
  streaming: boolean;
  /**
   * If the agent can send push notifications to the clients webhook
   */
  push_notifications: boolean;
  /**
   * Extensions supported by this agent.
   */
  extensions: _a2a_v1_AgentExtension__Output[];
}
// Original file: ../specification/grpc/a2a.proto

import type {
  Struct as _google_protobuf_Struct,
  Struct__Output as _google_protobuf_Struct__Output,
} from "../src/types/google/protobuf/Struct";

/**
 * --8<-- [start:AgentCardSignature]
 * AgentCardSignature represents a JWS signature of an AgentCard.
 * This follows the JSON format of an RFC 7515 JSON Web Signature (JWS).
 */
export interface AgentCardSignature {
  /**
   * The protected JWS header for the signature. This is always a
   * base64url-encoded JSON object. Required.
   */
  protected?: string;
  /**
   * The computed signature, base64url-encoded. Required.
   */
  signature?: string;
  /**
   * The unprotected JWS header values.
   */
  header?: _google_protobuf_Struct | null;
}

/**
 * --8<-- [start:AgentCardSignature]
 * AgentCardSignature represents a JWS signature of an AgentCard.
 * This follows the JSON format of an RFC 7515 JSON Web Signature (JWS).
 */
export interface AgentCardSignature__Output {
  /**
   * The protected JWS header for the signature. This is always a
   * base64url-encoded JSON object. Required.
   */
  protected: string;
  /**
   * The computed signature, base64url-encoded. Required.
   */
  signature: string;
  /**
   * The unprotected JWS header values.
   */
  header: _google_protobuf_Struct__Output | null;
}
// Original file: ../specification/grpc/a2a.proto

import type {
  AgentProvider as _a2a_v1_AgentProvider,
  AgentProvider__Output as _a2a_v1_AgentProvider__Output,
} from "../src/types/a2a/v1/AgentProvider";
import type {
  AgentCapabilities as _a2a_v1_AgentCapabilities,
  AgentCapabilities__Output as _a2a_v1_AgentCapabilities__Output,
} from "../src/types/a2a/v1/AgentCapabilities";
import type {
  SecurityScheme as _a2a_v1_SecurityScheme,
  SecurityScheme__Output as _a2a_v1_SecurityScheme__Output,
} from "../src/types/a2a/v1/SecurityScheme";
import type {
  Security as _a2a_v1_Security,
  Security__Output as _a2a_v1_Security__Output,
} from "../src/types/a2a/v1/Security";
import type {
  AgentSkill as _a2a_v1_AgentSkill,
  AgentSkill__Output as _a2a_v1_AgentSkill__Output,
} from "../src/types/a2a/v1/AgentSkill";
import type {
  AgentInterface as _a2a_v1_AgentInterface,
  AgentInterface__Output as _a2a_v1_AgentInterface__Output,
} from "../src/types/a2a/v1/AgentInterface";
import type {
  AgentCardSignature as _a2a_v1_AgentCardSignature,
  AgentCardSignature__Output as _a2a_v1_AgentCardSignature__Output,
} from "../src/types/a2a/v1/AgentCardSignature";

/**
 * --8<-- [start:AgentCard]
 * AgentCard conveys key information:
 * - Overall details (version, name, description, uses)
 * - Skills; a set of actions/solutions the agent can perform
 * - Default modalities/content types supported by the agent.
 * - Authentication requirements
 * Next ID: 19
 */
export interface AgentCard {
  /**
   * A human readable name for the agent.
   * Example: "Recipe Agent"
   */
  name?: string;
  /**
   * A description of the agent's domain of action/solution space.
   * Example: "Agent that helps users with recipes and cooking."
   */
  description?: string;
  /**
   * A URL to the address the agent is hosted at. This represents the
   * preferred endpoint as declared by the agent.
   */
  url?: string;
  /**
   * The service provider of the agent.
   */
  provider?: _a2a_v1_AgentProvider | null;
  /**
   * The version of the agent.
   * Example: "1.0.0"
   */
  version?: string;
  /**
   * A url to provide additional documentation about the agent.
   */
  documentation_url?: string;
  /**
   * A2A Capability set supported by the agent.
   */
  capabilities?: _a2a_v1_AgentCapabilities | null;
  /**
   * The security scheme details used for authenticating with this agent.
   */
  security_schemes?: { [key: string]: _a2a_v1_SecurityScheme };
  /**
   * protolint:disable REPEATED_FIELD_NAMES_PLURALIZED
   * Security requirements for contacting the agent.
   * This list can be seen as an OR of ANDs. Each object in the list describes
   * one possible set of security requirements that must be present on a
   * request. This allows specifying, for example, "callers must either use
   * OAuth OR an API Key AND mTLS."
   * Example:
   * security {
   * schemes { key: "oauth" value { list: ["read"] } }
   * }
   * security {
   * schemes { key: "api-key" }
   * schemes { key: "mtls" }
   * }
   */
  security?: _a2a_v1_Security[];
  /**
   * protolint:enable REPEATED_FIELD_NAMES_PLURALIZED
   * The set of interaction modes that the agent supports across all skills.
   * This can be overridden per skill. Defined as mime types.
   */
  default_input_modes?: string[];
  /**
   * The mime types supported as outputs from this agent.
   */
  default_output_modes?: string[];
  /**
   * Skills represent a unit of ability an agent can perform. This may
   * somewhat abstract but represents a more focused set of actions that the
   * agent is highly likely to succeed at.
   */
  skills?: _a2a_v1_AgentSkill[];
  /**
   * Whether the agent supports providing an extended agent card when
   * the user is authenticated, i.e. is the card from .well-known
   * different than the card from GetAgentCard.
   */
  supports_authenticated_extended_card?: boolean;
  /**
   * The transport of the preferred endpoint. If empty, defaults to JSONRPC.
   */
  preferred_transport?: string;
  /**
   * Announcement of additional supported transports. Client can use any of
   * the supported transports.
   */
  additional_interfaces?: _a2a_v1_AgentInterface[];
  /**
   * The version of the A2A protocol this agent supports.
   */
  protocol_version?: string;
  /**
   * JSON Web Signatures computed for this AgentCard.
   */
  signatures?: _a2a_v1_AgentCardSignature[];
  /**
   * An optional URL to an icon for the agent.
   */
  icon_url?: string;
}

/**
 * --8<-- [start:AgentCard]
 * AgentCard conveys key information:
 * - Overall details (version, name, description, uses)
 * - Skills; a set of actions/solutions the agent can perform
 * - Default modalities/content types supported by the agent.
 * - Authentication requirements
 * Next ID: 19
 */
export interface AgentCard__Output {
  /**
   * A human readable name for the agent.
   * Example: "Recipe Agent"
   */
  name: string;
  /**
   * A description of the agent's domain of action/solution space.
   * Example: "Agent that helps users with recipes and cooking."
   */
  description: string;
  /**
   * A URL to the address the agent is hosted at. This represents the
   * preferred endpoint as declared by the agent.
   */
  url: string;
  /**
   * The service provider of the agent.
   */
  provider: _a2a_v1_AgentProvider__Output | null;
  /**
   * The version of the agent.
   * Example: "1.0.0"
   */
  version: string;
  /**
   * A url to provide additional documentation about the agent.
   */
  documentation_url: string;
  /**
   * A2A Capability set supported by the agent.
   */
  capabilities: _a2a_v1_AgentCapabilities__Output | null;
  /**
   * The security scheme details used for authenticating with this agent.
   */
  security_schemes: { [key: string]: _a2a_v1_SecurityScheme__Output };
  /**
   * protolint:disable REPEATED_FIELD_NAMES_PLURALIZED
   * Security requirements for contacting the agent.
   * This list can be seen as an OR of ANDs. Each object in the list describes
   * one possible set of security requirements that must be present on a
   * request. This allows specifying, for example, "callers must either use
   * OAuth OR an API Key AND mTLS."
   * Example:
   * security {
   * schemes { key: "oauth" value { list: ["read"] } }
   * }
   * security {
   * schemes { key: "api-key" }
   * schemes { key: "mtls" }
   * }
   */
  security: _a2a_v1_Security__Output[];
  /**
   * protolint:enable REPEATED_FIELD_NAMES_PLURALIZED
   * The set of interaction modes that the agent supports across all skills.
   * This can be overridden per skill. Defined as mime types.
   */
  default_input_modes: string[];
  /**
   * The mime types supported as outputs from this agent.
   */
  default_output_modes: string[];
  /**
   * Skills represent a unit of ability an agent can perform. This may
   * somewhat abstract but represents a more focused set of actions that the
   * agent is highly likely to succeed at.
   */
  skills: _a2a_v1_AgentSkill__Output[];
  /**
   * Whether the agent supports providing an extended agent card when
   * the user is authenticated, i.e. is the card from .well-known
   * different than the card from GetAgentCard.
   */
  supports_authenticated_extended_card: boolean;
  /**
   * The transport of the preferred endpoint. If empty, defaults to JSONRPC.
   */
  preferred_transport: string;
  /**
   * Announcement of additional supported transports. Client can use any of
   * the supported transports.
   */
  additional_interfaces: _a2a_v1_AgentInterface__Output[];
  /**
   * The version of the A2A protocol this agent supports.
   */
  protocol_version: string;
  /**
   * JSON Web Signatures computed for this AgentCard.
   */
  signatures: _a2a_v1_AgentCardSignature__Output[];
  /**
   * An optional URL to an icon for the agent.
   */
  icon_url: string;
}
// Original file: ../specification/grpc/a2a.proto

import type {
  Struct as _google_protobuf_Struct,
  Struct__Output as _google_protobuf_Struct__Output,
} from "../src/types/google/protobuf/Struct";

/**
 * --8<-- [start:AgentExtension]
 * A declaration of an extension supported by an Agent.
 */
export interface AgentExtension {
  /**
   * The URI of the extension.
   * Example: "https://developers.google.com/identity/protocols/oauth2"
   */
  uri?: string;
  /**
   * A description of how this agent uses this extension.
   * Example: "Google OAuth 2.0 authentication"
   */
  description?: string;
  /**
   * Whether the client must follow specific requirements of the extension.
   * Example: false
   */
  required?: boolean;
  /**
   * Optional configuration for the extension.
   */
  params?: _google_protobuf_Struct | null;
}

/**
 * --8<-- [start:AgentExtension]
 * A declaration of an extension supported by an Agent.
 */
export interface AgentExtension__Output {
  /**
   * The URI of the extension.
   * Example: "https://developers.google.com/identity/protocols/oauth2"
   */
  uri: string;
  /**
   * A description of how this agent uses this extension.
   * Example: "Google OAuth 2.0 authentication"
   */
  description: string;
  /**
   * Whether the client must follow specific requirements of the extension.
   * Example: false
   */
  required: boolean;
  /**
   * Optional configuration for the extension.
   */
  params: _google_protobuf_Struct__Output | null;
}
// Original file: ../specification/grpc/a2a.proto

/**
 * --8<-- [start:AgentInterface]
 * Defines additional transport information for the agent.
 */
export interface AgentInterface {
  /**
   * The url this interface is found at.
   */
  url?: string;
  /**
   * The transport supported this url. This is an open form string, to be
   * easily extended for many transport protocols. The core ones officially
   * supported are JSONRPC, GRPC and HTTP+JSON.
   */
  transport?: string;
}

/**
 * --8<-- [start:AgentInterface]
 * Defines additional transport information for the agent.
 */
export interface AgentInterface__Output {
  /**
   * The url this interface is found at.
   */
  url: string;
  /**
   * The transport supported this url. This is an open form string, to be
   * easily extended for many transport protocols. The core ones officially
   * supported are JSONRPC, GRPC and HTTP+JSON.
   */
  transport: string;
}
// Original file: ../specification/grpc/a2a.proto

/**
 * --8<-- [start:AgentProvider]
 * Represents information about the service provider of an agent.
 */
export interface AgentProvider {
  /**
   * The providers reference url
   * Example: "https://ai.google.dev"
   */
  url?: string;
  /**
   * The providers organization name
   * Example: "Google"
   */
  organization?: string;
}

/**
 * --8<-- [start:AgentProvider]
 * Represents information about the service provider of an agent.
 */
export interface AgentProvider__Output {
  /**
   * The providers reference url
   * Example: "https://ai.google.dev"
   */
  url: string;
  /**
   * The providers organization name
   * Example: "Google"
   */
  organization: string;
}
// Original file: ../specification/grpc/a2a.proto

import type {
  Security as _a2a_v1_Security,
  Security__Output as _a2a_v1_Security__Output,
} from "../src/types/a2a/v1/Security";

/**
 * --8<-- [start:AgentSkill]
 * AgentSkill represents a unit of action/solution that the agent can perform.
 * One can think of this as a type of highly reliable solution that an agent
 * can be tasked to provide. Agents have the autonomy to choose how and when
 * to use specific skills, but clients should have confidence that if the
 * skill is defined that unit of action can be reliably performed.
 */
export interface AgentSkill {
  /**
   * Unique identifier of the skill within this agent.
   */
  id?: string;
  /**
   * A human readable name for the skill.
   */
  name?: string;
  /**
   * A human (or llm) readable description of the skill
   * details and behaviors.
   */
  description?: string;
  /**
   * A set of tags for the skill to enhance categorization/utilization.
   * Example: ["cooking", "customer support", "billing"]
   */
  tags?: string[];
  /**
   * A set of example queries that this skill is designed to address.
   * These examples should help the caller to understand how to craft requests
   * to the agent to achieve specific goals.
   * Example: ["I need a recipe for bread"]
   */
  examples?: string[];
  /**
   * Possible input modalities supported.
   */
  input_modes?: string[];
  /**
   * Possible output modalities produced
   */
  output_modes?: string[];
  /**
   * protolint:disable REPEATED_FIELD_NAMES_PLURALIZED
   * Security schemes necessary for the agent to leverage this skill.
   * As in the overall AgentCard.security, this list represents a logical OR of
   * security requirement objects. Each object is a set of security schemes
   * that must be used together (a logical AND).
   */
  security?: _a2a_v1_Security[];
}

/**
 * --8<-- [start:AgentSkill]
 * AgentSkill represents a unit of action/solution that the agent can perform.
 * One can think of this as a type of highly reliable solution that an agent
 * can be tasked to provide. Agents have the autonomy to choose how and when
 * to use specific skills, but clients should have confidence that if the
 * skill is defined that unit of action can be reliably performed.
 */
export interface AgentSkill__Output {
  /**
   * Unique identifier of the skill within this agent.
   */
  id: string;
  /**
   * A human readable name for the skill.
   */
  name: string;
  /**
   * A human (or llm) readable description of the skill
   * details and behaviors.
   */
  description: string;
  /**
   * A set of tags for the skill to enhance categorization/utilization.
   * Example: ["cooking", "customer support", "billing"]
   */
  tags: string[];
  /**
   * A set of example queries that this skill is designed to address.
   * These examples should help the caller to understand how to craft requests
   * to the agent to achieve specific goals.
   * Example: ["I need a recipe for bread"]
   */
  examples: string[];
  /**
   * Possible input modalities supported.
   */
  input_modes: string[];
  /**
   * Possible output modalities produced
   */
  output_modes: string[];
  /**
   * protolint:disable REPEATED_FIELD_NAMES_PLURALIZED
   * Security schemes necessary for the agent to leverage this skill.
   * As in the overall AgentCard.security, this list represents a logical OR of
   * security requirement objects. Each object is a set of security schemes
   * that must be used together (a logical AND).
   */
  security: _a2a_v1_Security__Output[];
}
// Original file: ../specification/grpc/a2a.proto

/**
 * --8<-- [start:APIKeySecurityScheme]
 */
export interface APIKeySecurityScheme {
  /**
   * Description of this security scheme.
   */
  description?: string;
  /**
   * Location of the API key, valid values are "query", "header", or "cookie"
   */
  location?: string;
  /**
   * Name of the header, query or cookie parameter to be used.
   */
  name?: string;
}

/**
 * --8<-- [start:APIKeySecurityScheme]
 */
export interface APIKeySecurityScheme__Output {
  /**
   * Description of this security scheme.
   */
  description: string;
  /**
   * Location of the API key, valid values are "query", "header", or "cookie"
   */
  location: string;
  /**
   * Name of the header, query or cookie parameter to be used.
   */
  name: string;
}
// Original file: ../specification/grpc/a2a.proto

import type {
  Part as _a2a_v1_Part,
  Part__Output as _a2a_v1_Part__Output,
} from "../src/types/a2a/v1/Part";
import type {
  Struct as _google_protobuf_Struct,
  Struct__Output as _google_protobuf_Struct__Output,
} from "../src/types/google/protobuf/Struct";

/**
 * --8<-- [start:Artifact]
 * Artifacts are the container for task completed results. These are similar
 * to Messages but are intended to be the product of a task, as opposed to
 * point-to-point communication.
 */
export interface Artifact {
  /**
   * Unique identifier (e.g. UUID) for the artifact. It must be at least unique
   * within a task.
   */
  artifact_id?: string;
  /**
   * A human readable name for the artifact.
   */
  name?: string;
  /**
   * A human readable description of the artifact, optional.
   */
  description?: string;
  /**
   * The content of the artifact.
   */
  parts?: _a2a_v1_Part[];
  /**
   * Optional metadata included with the artifact.
   */
  metadata?: _google_protobuf_Struct | null;
  /**
   * The URIs of extensions that are present or contributed to this Artifact.
   */
  extensions?: string[];
}

/**
 * --8<-- [start:Artifact]
 * Artifacts are the container for task completed results. These are similar
 * to Messages but are intended to be the product of a task, as opposed to
 * point-to-point communication.
 */
export interface Artifact__Output {
  /**
   * Unique identifier (e.g. UUID) for the artifact. It must be at least unique
   * within a task.
   */
  artifact_id: string;
  /**
   * A human readable name for the artifact.
   */
  name: string;
  /**
   * A human readable description of the artifact, optional.
   */
  description: string;
  /**
   * The content of the artifact.
   */
  parts: _a2a_v1_Part__Output[];
  /**
   * Optional metadata included with the artifact.
   */
  metadata: _google_protobuf_Struct__Output | null;
  /**
   * The URIs of extensions that are present or contributed to this Artifact.
   */
  extensions: string[];
}
// Original file: ../specification/grpc/a2a.proto

/**
 * --8<-- [start:PushNotificationAuthenticationInfo]
 * Defines authentication details, used for push notifications.
 */
export interface AuthenticationInfo {
  /**
   * Supported authentication schemes - e.g. Basic, Bearer, etc
   */
  schemes?: string[];
  /**
   * Optional credentials
   */
  credentials?: string;
}

/**
 * --8<-- [start:PushNotificationAuthenticationInfo]
 * Defines authentication details, used for push notifications.
 */
export interface AuthenticationInfo__Output {
  /**
   * Supported authentication schemes - e.g. Basic, Bearer, etc
   */
  schemes: string[];
  /**
   * Optional credentials
   */
  credentials: string;
}
// Original file: ../specification/grpc/a2a.proto

/**
 * --8<-- [start:AuthorizationCodeOAuthFlow]
 */
export interface AuthorizationCodeOAuthFlow {
  /**
   * The authorization URL to be used for this flow. This MUST be in the
   * form of a URL. The OAuth2 standard requires the use of TLS
   */
  authorization_url?: string;
  /**
   * The token URL to be used for this flow. This MUST be in the form of a URL.
   * The OAuth2 standard requires the use of TLS.
   */
  token_url?: string;
  /**
   * The URL to be used for obtaining refresh tokens. This MUST be in the
   * form of a URL. The OAuth2 standard requires the use of TLS.
   */
  refresh_url?: string;
  /**
   * The available scopes for the OAuth2 security scheme. A map between the
   * scope name and a short description for it. The map MAY be empty.
   */
  scopes?: { [key: string]: string };
}

/**
 * --8<-- [start:AuthorizationCodeOAuthFlow]
 */
export interface AuthorizationCodeOAuthFlow__Output {
  /**
   * The authorization URL to be used for this flow. This MUST be in the
   * form of a URL. The OAuth2 standard requires the use of TLS
   */
  authorization_url: string;
  /**
   * The token URL to be used for this flow. This MUST be in the form of a URL.
   * The OAuth2 standard requires the use of TLS.
   */
  token_url: string;
  /**
   * The URL to be used for obtaining refresh tokens. This MUST be in the
   * form of a URL. The OAuth2 standard requires the use of TLS.
   */
  refresh_url: string;
  /**
   * The available scopes for the OAuth2 security scheme. A map between the
   * scope name and a short description for it. The map MAY be empty.
   */
  scopes: { [key: string]: string };
}
// Original file: ../specification/grpc/a2a.proto

/**
 * --8<-- [start:CancelTaskRequest]
 */
export interface CancelTaskRequest {
  /**
   * The resource name of the task to cancel.
   * Format: tasks/{task_id}
   */
  name?: string;
}

/**
 * --8<-- [start:CancelTaskRequest]
 */
export interface CancelTaskRequest__Output {
  /**
   * The resource name of the task to cancel.
   * Format: tasks/{task_id}
   */
  name: string;
}
// Original file: ../specification/grpc/a2a.proto

/**
 * --8<-- [start:ClientCredentialsOAuthFlow]
 */
export interface ClientCredentialsOAuthFlow {
  /**
   * The token URL to be used for this flow. This MUST be in the form of a URL.
   * The OAuth2 standard requires the use of TLS.
   */
  token_url?: string;
  /**
   * The URL to be used for obtaining refresh tokens. This MUST be in the
   * form of a URL. The OAuth2 standard requires the use of TLS.
   */
  refresh_url?: string;
  /**
   * The available scopes for the OAuth2 security scheme. A map between the
   * scope name and a short description for it. The map MAY be empty.
   */
  scopes?: { [key: string]: string };
}

/**
 * --8<-- [start:ClientCredentialsOAuthFlow]
 */
export interface ClientCredentialsOAuthFlow__Output {
  /**
   * The token URL to be used for this flow. This MUST be in the form of a URL.
   * The OAuth2 standard requires the use of TLS.
   */
  token_url: string;
  /**
   * The URL to be used for obtaining refresh tokens. This MUST be in the
   * form of a URL. The OAuth2 standard requires the use of TLS.
   */
  refresh_url: string;
  /**
   * The available scopes for the OAuth2 security scheme. A map between the
   * scope name and a short description for it. The map MAY be empty.
   */
  scopes: { [key: string]: string };
}
// Original file: ../specification/grpc/a2a.proto

import type {
  TaskPushNotificationConfig as _a2a_v1_TaskPushNotificationConfig,
  TaskPushNotificationConfig__Output as _a2a_v1_TaskPushNotificationConfig__Output,
} from "../src/types/a2a/v1/TaskPushNotificationConfig";

/**
 * --8<-- [start:SetTaskPushNotificationConfigRequest]
 */
export interface CreateTaskPushNotificationConfigRequest {
  /**
   * The parent task resource for this config.
   * Format: tasks/{task_id}
   */
  parent?: string;
  /**
   * The ID for the new config.
   */
  config_id?: string;
  /**
   * The configuration to create.
   */
  config?: _a2a_v1_TaskPushNotificationConfig | null;
}

/**
 * --8<-- [start:SetTaskPushNotificationConfigRequest]
 */
export interface CreateTaskPushNotificationConfigRequest__Output {
  /**
   * The parent task resource for this config.
   * Format: tasks/{task_id}
   */
  parent: string;
  /**
   * The ID for the new config.
   */
  config_id: string;
  /**
   * The configuration to create.
   */
  config: _a2a_v1_TaskPushNotificationConfig__Output | null;
}
// Original file: ../specification/grpc/a2a.proto

import type {
  Struct as _google_protobuf_Struct,
  Struct__Output as _google_protobuf_Struct__Output,
} from "../src/types/google/protobuf/Struct";

/**
 * --8<-- [start:DataPart]
 * DataPart represents a structured blob. This is most commonly a JSON payload.
 */
export interface DataPart {
  data?: _google_protobuf_Struct | null;
}

/**
 * --8<-- [start:DataPart]
 * DataPart represents a structured blob. This is most commonly a JSON payload.
 */
export interface DataPart__Output {
  data: _google_protobuf_Struct__Output | null;
}
// Original file: ../specification/grpc/a2a.proto

/**
 * --8<-- [start:DeleteTaskPushNotificationConfigRequest]
 */
export interface DeleteTaskPushNotificationConfigRequest {
  /**
   * The resource name of the config to delete.
   * Format: tasks/{task_id}/pushNotificationConfigs/{config_id}
   */
  name?: string;
}

/**
 * --8<-- [start:DeleteTaskPushNotificationConfigRequest]
 */
export interface DeleteTaskPushNotificationConfigRequest__Output {
  /**
   * The resource name of the config to delete.
   * Format: tasks/{task_id}/pushNotificationConfigs/{config_id}
   */
  name: string;
}
// Original file: ../specification/grpc/a2a.proto

/**
 * --8<-- [start:FilePart]
 * FilePart represents the different ways files can be provided. If files are
 * small, directly feeding the bytes is supported via file_with_bytes. If the
 * file is large, the agent should read the content as appropriate directly
 * from the file_with_uri source.
 */
export interface FilePart {
  file_with_uri?: string;
  file_with_bytes?: Buffer | Uint8Array | string;
  mime_type?: string;
  name?: string;
  file?: "file_with_uri" | "file_with_bytes";
}

/**
 * --8<-- [start:FilePart]
 * FilePart represents the different ways files can be provided. If files are
 * small, directly feeding the bytes is supported via file_with_bytes. If the
 * file is large, the agent should read the content as appropriate directly
 * from the file_with_uri source.
 */
export interface FilePart__Output {
  file_with_uri?: string;
  file_with_bytes?: Buffer;
  mime_type: string;
  name: string;
  file?: "file_with_uri" | "file_with_bytes";
}
// Original file: ../specification/grpc/a2a.proto

/**
 * --8<-- [start:GetAuthenticatedExtendedCardRequest]
 */
export interface GetAgentCardRequest {}

/**
 * --8<-- [start:GetAuthenticatedExtendedCardRequest]
 */
export interface GetAgentCardRequest__Output {}
// Original file: ../specification/grpc/a2a.proto

/**
 * --8<-- [start:GetTaskPushNotificationConfigRequest]
 */
export interface GetTaskPushNotificationConfigRequest {
  /**
   * The resource name of the config to retrieve.
   * Format: tasks/{task_id}/pushNotificationConfigs/{config_id}
   */
  name?: string;
}

/**
 * --8<-- [start:GetTaskPushNotificationConfigRequest]
 */
export interface GetTaskPushNotificationConfigRequest__Output {
  /**
   * The resource name of the config to retrieve.
   * Format: tasks/{task_id}/pushNotificationConfigs/{config_id}
   */
  name: string;
}
// Original file: ../specification/grpc/a2a.proto

/**
 * --8<-- [start:GetTaskRequest]
 */
export interface GetTaskRequest {
  /**
   * The resource name of the task.
   * Format: tasks/{task_id}
   */
  name?: string;
  /**
   * The number of most recent messages from the task's history to retrieve.
   */
  history_length?: number;
}

/**
 * --8<-- [start:GetTaskRequest]
 */
export interface GetTaskRequest__Output {
  /**
   * The resource name of the task.
   * Format: tasks/{task_id}
   */
  name: string;
  /**
   * The number of most recent messages from the task's history to retrieve.
   */
  history_length: number;
}
// Original file: ../specification/grpc/a2a.proto

/**
 * --8<-- [start:HTTPAuthSecurityScheme]
 */
export interface HTTPAuthSecurityScheme {
  /**
   * Description of this security scheme.
   */
  description?: string;
  /**
   * The name of the HTTP Authentication scheme to be used in the
   * Authorization header as defined in RFC7235. The values used SHOULD be
   * registered in the IANA Authentication Scheme registry.
   * The value is case-insensitive, as defined in RFC7235.
   */
  scheme?: string;
  /**
   * A hint to the client to identify how the bearer token is formatted.
   * Bearer tokens are usually generated by an authorization server, so
   * this information is primarily for documentation purposes.
   */
  bearer_format?: string;
}

/**
 * --8<-- [start:HTTPAuthSecurityScheme]
 */
export interface HTTPAuthSecurityScheme__Output {
  /**
   * Description of this security scheme.
   */
  description: string;
  /**
   * The name of the HTTP Authentication scheme to be used in the
   * Authorization header as defined in RFC7235. The values used SHOULD be
   * registered in the IANA Authentication Scheme registry.
   * The value is case-insensitive, as defined in RFC7235.
   */
  scheme: string;
  /**
   * A hint to the client to identify how the bearer token is formatted.
   * Bearer tokens are usually generated by an authorization server, so
   * this information is primarily for documentation purposes.
   */
  bearer_format: string;
}
// Original file: ../specification/grpc/a2a.proto

/**
 * --8<-- [start:ImplicitOAuthFlow]
 */
export interface ImplicitOAuthFlow {
  /**
   * The authorization URL to be used for this flow. This MUST be in the
   * form of a URL. The OAuth2 standard requires the use of TLS
   */
  authorization_url?: string;
  /**
   * The URL to be used for obtaining refresh tokens. This MUST be in the
   * form of a URL. The OAuth2 standard requires the use of TLS.
   */
  refresh_url?: string;
  /**
   * The available scopes for the OAuth2 security scheme. A map between the
   * scope name and a short description for it. The map MAY be empty.
   */
  scopes?: { [key: string]: string };
}

/**
 * --8<-- [start:ImplicitOAuthFlow]
 */
export interface ImplicitOAuthFlow__Output {
  /**
   * The authorization URL to be used for this flow. This MUST be in the
   * form of a URL. The OAuth2 standard requires the use of TLS
   */
  authorization_url: string;
  /**
   * The URL to be used for obtaining refresh tokens. This MUST be in the
   * form of a URL. The OAuth2 standard requires the use of TLS.
   */
  refresh_url: string;
  /**
   * The available scopes for the OAuth2 security scheme. A map between the
   * scope name and a short description for it. The map MAY be empty.
   */
  scopes: { [key: string]: string };
}
// Original file: ../specification/grpc/a2a.proto

/**
 * --8<-- [start:ListTaskPushNotificationConfigRequest]
 */
export interface ListTaskPushNotificationConfigRequest {
  /**
   * The parent task resource.
   * Format: tasks/{task_id}
   */
  parent?: string;
  /**
   * For AIP-158 these fields are present. Usually not used/needed.
   * The maximum number of configurations to return.
   * If unspecified, all configs will be returned.
   */
  page_size?: number;
  /**
   * A page token received from a previous
   * ListTaskPushNotificationConfigRequest call.
   * Provide this to retrieve the subsequent page.
   * When paginating, all other parameters provided to
   * `ListTaskPushNotificationConfigRequest` must match the call that provided
   * the page token.
   */
  page_token?: string;
}

/**
 * --8<-- [start:ListTaskPushNotificationConfigRequest]
 */
export interface ListTaskPushNotificationConfigRequest__Output {
  /**
   * The parent task resource.
   * Format: tasks/{task_id}
   */
  parent: string;
  /**
   * For AIP-158 these fields are present. Usually not used/needed.
   * The maximum number of configurations to return.
   * If unspecified, all configs will be returned.
   */
  page_size: number;
  /**
   * A page token received from a previous
   * ListTaskPushNotificationConfigRequest call.
   * Provide this to retrieve the subsequent page.
   * When paginating, all other parameters provided to
   * `ListTaskPushNotificationConfigRequest` must match the call that provided
   * the page token.
   */
  page_token: string;
}
// Original file: ../specification/grpc/a2a.proto

import type {
  TaskPushNotificationConfig as _a2a_v1_TaskPushNotificationConfig,
  TaskPushNotificationConfig__Output as _a2a_v1_TaskPushNotificationConfig__Output,
} from "../src/types/a2a/v1/TaskPushNotificationConfig";

/**
 * --8<-- [start:ListTaskPushNotificationConfigSuccessResponse]
 */
export interface ListTaskPushNotificationConfigResponse {
  /**
   * The list of push notification configurations.
   */
  configs?: _a2a_v1_TaskPushNotificationConfig[];
  /**
   * A token, which can be sent as `page_token` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  next_page_token?: string;
}

/**
 * --8<-- [start:ListTaskPushNotificationConfigSuccessResponse]
 */
export interface ListTaskPushNotificationConfigResponse__Output {
  /**
   * The list of push notification configurations.
   */
  configs: _a2a_v1_TaskPushNotificationConfig__Output[];
  /**
   * A token, which can be sent as `page_token` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  next_page_token: string;
}
// Original file: ../specification/grpc/a2a.proto

import type {
  Role as _a2a_v1_Role,
  Role__Output as _a2a_v1_Role__Output,
} from "../src/types/a2a/v1/Role";
import type {
  Part as _a2a_v1_Part,
  Part__Output as _a2a_v1_Part__Output,
} from "../src/types/a2a/v1/Part";
import type {
  Struct as _google_protobuf_Struct,
  Struct__Output as _google_protobuf_Struct__Output,
} from "../src/types/google/protobuf/Struct";

/**
 * --8<-- [start:Message]
 * Message is one unit of communication between client and server. It is
 * associated with a context and optionally a task. Since the server is
 * responsible for the context definition, it must always provide a context_id
 * in its messages. The client can optionally provide the context_id if it
 * knows the context to associate the message to. Similarly for task_id,
 * except the server decides if a task is created and whether to include the
 * task_id.
 */
export interface Message {
  /**
   * The unique identifier (e.g. UUID)of the message. This is required and
   * created by the message creator.
   */
  message_id?: string;
  /**
   * The context id of the message. This is optional and if set, the message
   * will be associated with the given context.
   */
  context_id?: string;
  /**
   * The task id of the message. This is optional and if set, the message
   * will be associated with the given task.
   */
  task_id?: string;
  /**
   * A role for the message.
   */
  role?: _a2a_v1_Role;
  /**
   * protolint:disable REPEATED_FIELD_NAMES_PLURALIZED
   * Content is the container of the message content.
   */
  content?: _a2a_v1_Part[];
  /**
   * protolint:enable REPEATED_FIELD_NAMES_PLURALIZED
   * Any optional metadata to provide along with the message.
   */
  metadata?: _google_protobuf_Struct | null;
  /**
   * The URIs of extensions that are present or contributed to this Message.
   */
  extensions?: string[];
}

/**
 * --8<-- [start:Message]
 * Message is one unit of communication between client and server. It is
 * associated with a context and optionally a task. Since the server is
 * responsible for the context definition, it must always provide a context_id
 * in its messages. The client can optionally provide the context_id if it
 * knows the context to associate the message to. Similarly for task_id,
 * except the server decides if a task is created and whether to include the
 * task_id.
 */
export interface Message__Output {
  /**
   * The unique identifier (e.g. UUID)of the message. This is required and
   * created by the message creator.
   */
  message_id: string;
  /**
   * The context id of the message. This is optional and if set, the message
   * will be associated with the given context.
   */
  context_id: string;
  /**
   * The task id of the message. This is optional and if set, the message
   * will be associated with the given task.
   */
  task_id: string;
  /**
   * A role for the message.
   */
  role: _a2a_v1_Role__Output;
  /**
   * protolint:disable REPEATED_FIELD_NAMES_PLURALIZED
   * Content is the container of the message content.
   */
  content: _a2a_v1_Part__Output[];
  /**
   * protolint:enable REPEATED_FIELD_NAMES_PLURALIZED
   * Any optional metadata to provide along with the message.
   */
  metadata: _google_protobuf_Struct__Output | null;
  /**
   * The URIs of extensions that are present or contributed to this Message.
   */
  extensions: string[];
}
// Original file: ../specification/grpc/a2a.proto

/**
 * --8<-- [start:MutualTLSSecurityScheme]
 */
export interface MutualTlsSecurityScheme {
  /**
   * Description of this security scheme.
   */
  description?: string;
}

/**
 * --8<-- [start:MutualTLSSecurityScheme]
 */
export interface MutualTlsSecurityScheme__Output {
  /**
   * Description of this security scheme.
   */
  description: string;
}
// Original file: ../specification/grpc/a2a.proto

import type {
  OAuthFlows as _a2a_v1_OAuthFlows,
  OAuthFlows__Output as _a2a_v1_OAuthFlows__Output,
} from "../src/types/a2a/v1/OAuthFlows";

/**
 * --8<-- [start:OAuth2SecurityScheme]
 */
export interface OAuth2SecurityScheme {
  /**
   * Description of this security scheme.
   */
  description?: string;
  /**
   * An object containing configuration information for the flow types supported
   */
  flows?: _a2a_v1_OAuthFlows | null;
  /**
   * URL to the oauth2 authorization server metadata
   * [RFC8414](https://datatracker.ietf.org/doc/html/rfc8414). TLS is required.
   */
  oauth2_metadata_url?: string;
}

/**
 * --8<-- [start:OAuth2SecurityScheme]
 */
export interface OAuth2SecurityScheme__Output {
  /**
   * Description of this security scheme.
   */
  description: string;
  /**
   * An object containing configuration information for the flow types supported
   */
  flows: _a2a_v1_OAuthFlows__Output | null;
  /**
   * URL to the oauth2 authorization server metadata
   * [RFC8414](https://datatracker.ietf.org/doc/html/rfc8414). TLS is required.
   */
  oauth2_metadata_url: string;
}
// Original file: ../specification/grpc/a2a.proto

import type {
  AuthorizationCodeOAuthFlow as _a2a_v1_AuthorizationCodeOAuthFlow,
  AuthorizationCodeOAuthFlow__Output as _a2a_v1_AuthorizationCodeOAuthFlow__Output,
} from "../src/types/a2a/v1/AuthorizationCodeOAuthFlow";
import type {
  ClientCredentialsOAuthFlow as _a2a_v1_ClientCredentialsOAuthFlow,
  ClientCredentialsOAuthFlow__Output as _a2a_v1_ClientCredentialsOAuthFlow__Output,
} from "../src/types/a2a/v1/ClientCredentialsOAuthFlow";
import type {
  ImplicitOAuthFlow as _a2a_v1_ImplicitOAuthFlow,
  ImplicitOAuthFlow__Output as _a2a_v1_ImplicitOAuthFlow__Output,
} from "../src/types/a2a/v1/ImplicitOAuthFlow";
import type {
  PasswordOAuthFlow as _a2a_v1_PasswordOAuthFlow,
  PasswordOAuthFlow__Output as _a2a_v1_PasswordOAuthFlow__Output,
} from "../src/types/a2a/v1/PasswordOAuthFlow";

/**
 * --8<-- [start:OAuthFlows]
 */
export interface OAuthFlows {
  authorization_code?: _a2a_v1_AuthorizationCodeOAuthFlow | null;
  client_credentials?: _a2a_v1_ClientCredentialsOAuthFlow | null;
  implicit?: _a2a_v1_ImplicitOAuthFlow | null;
  password?: _a2a_v1_PasswordOAuthFlow | null;
  flow?: "authorization_code" | "client_credentials" | "implicit" | "password";
}

/**
 * --8<-- [start:OAuthFlows]
 */
export interface OAuthFlows__Output {
  authorization_code?: _a2a_v1_AuthorizationCodeOAuthFlow__Output | null;
  client_credentials?: _a2a_v1_ClientCredentialsOAuthFlow__Output | null;
  implicit?: _a2a_v1_ImplicitOAuthFlow__Output | null;
  password?: _a2a_v1_PasswordOAuthFlow__Output | null;
  flow?: "authorization_code" | "client_credentials" | "implicit" | "password";
}
// Original file: ../specification/grpc/a2a.proto

/**
 * --8<-- [start:OpenIdConnectSecurityScheme]
 */
export interface OpenIdConnectSecurityScheme {
  /**
   * Description of this security scheme.
   */
  description?: string;
  /**
   * Well-known URL to discover the [[OpenID-Connect-Discovery]] provider
   * metadata.
   */
  open_id_connect_url?: string;
}

/**
 * --8<-- [start:OpenIdConnectSecurityScheme]
 */
export interface OpenIdConnectSecurityScheme__Output {
  /**
   * Description of this security scheme.
   */
  description: string;
  /**
   * Well-known URL to discover the [[OpenID-Connect-Discovery]] provider
   * metadata.
   */
  open_id_connect_url: string;
}
// Original file: ../specification/grpc/a2a.proto

import type {
  FilePart as _a2a_v1_FilePart,
  FilePart__Output as _a2a_v1_FilePart__Output,
} from "../src/types/a2a/v1/FilePart";
import type {
  DataPart as _a2a_v1_DataPart,
  DataPart__Output as _a2a_v1_DataPart__Output,
} from "../src/types/a2a/v1/DataPart";
import type {
  Struct as _google_protobuf_Struct,
  Struct__Output as _google_protobuf_Struct__Output,
} from "../src/types/google/protobuf/Struct";

/**
 * --8<-- [start:Part]
 * Part represents a container for a section of communication content.
 * Parts can be purely textual, some sort of file (image, video, etc) or
 * a structured data blob (i.e. JSON).
 */
export interface Part {
  text?: string;
  file?: _a2a_v1_FilePart | null;
  data?: _a2a_v1_DataPart | null;
  /**
   * Optional metadata associated with this part.
   */
  metadata?: _google_protobuf_Struct | null;
  part?: "text" | "file" | "data";
}

/**
 * --8<-- [start:Part]
 * Part represents a container for a section of communication content.
 * Parts can be purely textual, some sort of file (image, video, etc) or
 * a structured data blob (i.e. JSON).
 */
export interface Part__Output {
  text?: string;
  file?: _a2a_v1_FilePart__Output | null;
  data?: _a2a_v1_DataPart__Output | null;
  /**
   * Optional metadata associated with this part.
   */
  metadata: _google_protobuf_Struct__Output | null;
  part?: "text" | "file" | "data";
}
// Original file: ../specification/grpc/a2a.proto

/**
 * --8<-- [start:PasswordOAuthFlow]
 */
export interface PasswordOAuthFlow {
  /**
   * The token URL to be used for this flow. This MUST be in the form of a URL.
   * The OAuth2 standard requires the use of TLS.
   */
  token_url?: string;
  /**
   * The URL to be used for obtaining refresh tokens. This MUST be in the
   * form of a URL. The OAuth2 standard requires the use of TLS.
   */
  refresh_url?: string;
  /**
   * The available scopes for the OAuth2 security scheme. A map between the
   * scope name and a short description for it. The map MAY be empty.
   */
  scopes?: { [key: string]: string };
}

/**
 * --8<-- [start:PasswordOAuthFlow]
 */
export interface PasswordOAuthFlow__Output {
  /**
   * The token URL to be used for this flow. This MUST be in the form of a URL.
   * The OAuth2 standard requires the use of TLS.
   */
  token_url: string;
  /**
   * The URL to be used for obtaining refresh tokens. This MUST be in the
   * form of a URL. The OAuth2 standard requires the use of TLS.
   */
  refresh_url: string;
  /**
   * The available scopes for the OAuth2 security scheme. A map between the
   * scope name and a short description for it. The map MAY be empty.
   */
  scopes: { [key: string]: string };
}
// Original file: ../specification/grpc/a2a.proto

import type {
  AuthenticationInfo as _a2a_v1_AuthenticationInfo,
  AuthenticationInfo__Output as _a2a_v1_AuthenticationInfo__Output,
} from "../src/types/a2a/v1/AuthenticationInfo";

/**
 * --8<-- [start:PushNotificationConfig]
 * Configuration for setting up push notifications for task updates.
 */
export interface PushNotificationConfig {
  /**
   * A unique identifier (e.g. UUID) for this push notification.
   */
  id?: string;
  /**
   * Url to send the notification too
   */
  url?: string;
  /**
   * Token unique for this task/session
   */
  token?: string;
  /**
   * Information about the authentication to sent with the notification
   */
  authentication?: _a2a_v1_AuthenticationInfo | null;
}

/**
 * --8<-- [start:PushNotificationConfig]
 * Configuration for setting up push notifications for task updates.
 */
export interface PushNotificationConfig__Output {
  /**
   * A unique identifier (e.g. UUID) for this push notification.
   */
  id: string;
  /**
   * Url to send the notification too
   */
  url: string;
  /**
   * Token unique for this task/session
   */
  token: string;
  /**
   * Information about the authentication to sent with the notification
   */
  authentication: _a2a_v1_AuthenticationInfo__Output | null;
}
// Original file: ../specification/grpc/a2a.proto

export const Role = {
  ROLE_UNSPECIFIED: "ROLE_UNSPECIFIED",
  /**
   * USER role refers to communication from the client to the server.
   */
  ROLE_USER: "ROLE_USER",
  /**
   * AGENT role refers to communication from the server to the client.
   */
  ROLE_AGENT: "ROLE_AGENT",
} as const;

export type Role =
  | "ROLE_UNSPECIFIED"
  | 0
  /**
   * USER role refers to communication from the client to the server.
   */
  | "ROLE_USER"
  | 1
  /**
   * AGENT role refers to communication from the server to the client.
   */
  | "ROLE_AGENT"
  | 2;

export type Role__Output = (typeof Role)[keyof typeof Role];
// Original file: ../specification/grpc/a2a.proto

import type {
  APIKeySecurityScheme as _a2a_v1_APIKeySecurityScheme,
  APIKeySecurityScheme__Output as _a2a_v1_APIKeySecurityScheme__Output,
} from "../src/types/a2a/v1/APIKeySecurityScheme";
import type {
  HTTPAuthSecurityScheme as _a2a_v1_HTTPAuthSecurityScheme,
  HTTPAuthSecurityScheme__Output as _a2a_v1_HTTPAuthSecurityScheme__Output,
} from "../src/types/a2a/v1/HTTPAuthSecurityScheme";
import type {
  OAuth2SecurityScheme as _a2a_v1_OAuth2SecurityScheme,
  OAuth2SecurityScheme__Output as _a2a_v1_OAuth2SecurityScheme__Output,
} from "../src/types/a2a/v1/OAuth2SecurityScheme";
import type {
  OpenIdConnectSecurityScheme as _a2a_v1_OpenIdConnectSecurityScheme,
  OpenIdConnectSecurityScheme__Output as _a2a_v1_OpenIdConnectSecurityScheme__Output,
} from "../src/types/a2a/v1/OpenIdConnectSecurityScheme";
import type {
  MutualTlsSecurityScheme as _a2a_v1_MutualTlsSecurityScheme,
  MutualTlsSecurityScheme__Output as _a2a_v1_MutualTlsSecurityScheme__Output,
} from "../src/types/a2a/v1/MutualTlsSecurityScheme";

/**
 * --8<-- [start:SecurityScheme]
 */
export interface SecurityScheme {
  api_key_security_scheme?: _a2a_v1_APIKeySecurityScheme | null;
  http_auth_security_scheme?: _a2a_v1_HTTPAuthSecurityScheme | null;
  oauth2_security_scheme?: _a2a_v1_OAuth2SecurityScheme | null;
  open_id_connect_security_scheme?: _a2a_v1_OpenIdConnectSecurityScheme | null;
  mtls_security_scheme?: _a2a_v1_MutualTlsSecurityScheme | null;
  scheme?:
    | "api_key_security_scheme"
    | "http_auth_security_scheme"
    | "oauth2_security_scheme"
    | "open_id_connect_security_scheme"
    | "mtls_security_scheme";
}

/**
 * --8<-- [start:SecurityScheme]
 */
export interface SecurityScheme__Output {
  api_key_security_scheme?: _a2a_v1_APIKeySecurityScheme__Output | null;
  http_auth_security_scheme?: _a2a_v1_HTTPAuthSecurityScheme__Output | null;
  oauth2_security_scheme?: _a2a_v1_OAuth2SecurityScheme__Output | null;
  open_id_connect_security_scheme?: _a2a_v1_OpenIdConnectSecurityScheme__Output | null;
  mtls_security_scheme?: _a2a_v1_MutualTlsSecurityScheme__Output | null;
  scheme?:
    | "api_key_security_scheme"
    | "http_auth_security_scheme"
    | "oauth2_security_scheme"
    | "open_id_connect_security_scheme"
    | "mtls_security_scheme";
}
// Original file: ../specification/grpc/a2a.proto

import type {
  StringList as _a2a_v1_StringList,
  StringList__Output as _a2a_v1_StringList__Output,
} from "../src/types/a2a/v1/StringList";

export interface Security {
  schemes?: { [key: string]: _a2a_v1_StringList };
}

export interface Security__Output {
  schemes: { [key: string]: _a2a_v1_StringList__Output };
}
// Original file: ../specification/grpc/a2a.proto

import type {
  PushNotificationConfig as _a2a_v1_PushNotificationConfig,
  PushNotificationConfig__Output as _a2a_v1_PushNotificationConfig__Output,
} from "../src/types/a2a/v1/PushNotificationConfig";

/**
 * --8<-- [start:MessageSendConfiguration]
 * Configuration of a send message request.
 */
export interface SendMessageConfiguration {
  /**
   * The output modes that the agent is expected to respond with.
   */
  accepted_output_modes?: string[];
  /**
   * A configuration of a webhook that can be used to receive updates
   */
  push_notification?: _a2a_v1_PushNotificationConfig | null;
  /**
   * The maximum number of messages to include in the history. if 0, the
   * history will be unlimited.
   */
  history_length?: number;
  /**
   * If true, the message will be blocking until the task is completed. If
   * false, the message will be non-blocking and the task will be returned
   * immediately. It is the caller's responsibility to check for any task
   * updates.
   */
  blocking?: boolean;
}

/**
 * --8<-- [start:MessageSendConfiguration]
 * Configuration of a send message request.
 */
export interface SendMessageConfiguration__Output {
  /**
   * The output modes that the agent is expected to respond with.
   */
  accepted_output_modes: string[];
  /**
   * A configuration of a webhook that can be used to receive updates
   */
  push_notification: _a2a_v1_PushNotificationConfig__Output | null;
  /**
   * The maximum number of messages to include in the history. if 0, the
   * history will be unlimited.
   */
  history_length: number;
  /**
   * If true, the message will be blocking until the task is completed. If
   * false, the message will be non-blocking and the task will be returned
   * immediately. It is the caller's responsibility to check for any task
   * updates.
   */
  blocking: boolean;
}
// Original file: ../specification/grpc/a2a.proto

import type {
  Message as _a2a_v1_Message,
  Message__Output as _a2a_v1_Message__Output,
} from "../src/types/a2a/v1/Message";
import type {
  SendMessageConfiguration as _a2a_v1_SendMessageConfiguration,
  SendMessageConfiguration__Output as _a2a_v1_SendMessageConfiguration__Output,
} from "../src/types/a2a/v1/SendMessageConfiguration";
import type {
  Struct as _google_protobuf_Struct,
  Struct__Output as _google_protobuf_Struct__Output,
} from "../src/types/google/protobuf/Struct";

/**
 * Request Messages ///////////
 * --8<-- [start:MessageSendParams]
 */
export interface SendMessageRequest {
  /**
   * The message to send to the agent.
   */
  request?: _a2a_v1_Message | null;
  /**
   * Configuration for the send request.
   */
  configuration?: _a2a_v1_SendMessageConfiguration | null;
  /**
   * Optional metadata for the request.
   */
  metadata?: _google_protobuf_Struct | null;
}

/**
 * Request Messages ///////////
 * --8<-- [start:MessageSendParams]
 */
export interface SendMessageRequest__Output {
  /**
   * The message to send to the agent.
   */
  request: _a2a_v1_Message__Output | null;
  /**
   * Configuration for the send request.
   */
  configuration: _a2a_v1_SendMessageConfiguration__Output | null;
  /**
   * Optional metadata for the request.
   */
  metadata: _google_protobuf_Struct__Output | null;
}
// Original file: ../specification/grpc/a2a.proto

import type {
  Task as _a2a_v1_Task,
  Task__Output as _a2a_v1_Task__Output,
} from "../src/types/a2a/v1/Task";
import type {
  Message as _a2a_v1_Message,
  Message__Output as _a2a_v1_Message__Output,
} from "../src/types/a2a/v1/Message";

/**
 * Response Messages ///////////
 * --8<-- [start:SendMessageSuccessResponse]
 */
export interface SendMessageResponse {
  task?: _a2a_v1_Task | null;
  msg?: _a2a_v1_Message | null;
  payload?: "task" | "msg";
}

/**
 * Response Messages ///////////
 * --8<-- [start:SendMessageSuccessResponse]
 */
export interface SendMessageResponse__Output {
  task?: _a2a_v1_Task__Output | null;
  msg?: _a2a_v1_Message__Output | null;
  payload?: "task" | "msg";
}
// Original file: ../specification/grpc/a2a.proto

import type {
  Task as _a2a_v1_Task,
  Task__Output as _a2a_v1_Task__Output,
} from "../src/types/a2a/v1/Task";
import type {
  Message as _a2a_v1_Message,
  Message__Output as _a2a_v1_Message__Output,
} from "../src/types/a2a/v1/Message";
import type {
  TaskStatusUpdateEvent as _a2a_v1_TaskStatusUpdateEvent,
  TaskStatusUpdateEvent__Output as _a2a_v1_TaskStatusUpdateEvent__Output,
} from "../src/types/a2a/v1/TaskStatusUpdateEvent";
import type {
  TaskArtifactUpdateEvent as _a2a_v1_TaskArtifactUpdateEvent,
  TaskArtifactUpdateEvent__Output as _a2a_v1_TaskArtifactUpdateEvent__Output,
} from "../src/types/a2a/v1/TaskArtifactUpdateEvent";

/**
 * --8<-- [start:SendStreamingMessageSuccessResponse]
 * The stream response for a message. The stream should be one of the following
 * sequences:
 * If the response is a message, the stream should contain one, and only one,
 * message and then close
 * If the response is a task lifecycle, the first response should be a Task
 * object followed by zero or more TaskStatusUpdateEvents and
 * TaskArtifactUpdateEvents. The stream should complete when the Task
 * if in an interrupted or terminal state. A stream that ends before these
 * conditions are met are
 */
export interface StreamResponse {
  task?: _a2a_v1_Task | null;
  msg?: _a2a_v1_Message | null;
  status_update?: _a2a_v1_TaskStatusUpdateEvent | null;
  artifact_update?: _a2a_v1_TaskArtifactUpdateEvent | null;
  payload?: "task" | "msg" | "status_update" | "artifact_update";
}

/**
 * --8<-- [start:SendStreamingMessageSuccessResponse]
 * The stream response for a message. The stream should be one of the following
 * sequences:
 * If the response is a message, the stream should contain one, and only one,
 * message and then close
 * If the response is a task lifecycle, the first response should be a Task
 * object followed by zero or more TaskStatusUpdateEvents and
 * TaskArtifactUpdateEvents. The stream should complete when the Task
 * if in an interrupted or terminal state. A stream that ends before these
 * conditions are met are
 */
export interface StreamResponse__Output {
  task?: _a2a_v1_Task__Output | null;
  msg?: _a2a_v1_Message__Output | null;
  status_update?: _a2a_v1_TaskStatusUpdateEvent__Output | null;
  artifact_update?: _a2a_v1_TaskArtifactUpdateEvent__Output | null;
  payload?: "task" | "msg" | "status_update" | "artifact_update";
}
// Original file: ../specification/grpc/a2a.proto

/**
 * protolint:disable REPEATED_FIELD_NAMES_PLURALIZED
 */
export interface StringList {
  list?: string[];
}

/**
 * protolint:disable REPEATED_FIELD_NAMES_PLURALIZED
 */
export interface StringList__Output {
  list: string[];
}
// Original file: ../specification/grpc/a2a.proto

import type {
  Artifact as _a2a_v1_Artifact,
  Artifact__Output as _a2a_v1_Artifact__Output,
} from "../src/types/a2a/v1/Artifact";
import type {
  Struct as _google_protobuf_Struct,
  Struct__Output as _google_protobuf_Struct__Output,
} from "../src/types/google/protobuf/Struct";

/**
 * --8<-- [start:TaskArtifactUpdateEvent]
 * TaskArtifactUpdateEvent represents a task delta where an artifact has
 * been generated.
 */
export interface TaskArtifactUpdateEvent {
  /**
   * The id of the task for this artifact
   */
  task_id?: string;
  /**
   * The id of the context that this task belongs too
   */
  context_id?: string;
  /**
   * The artifact itself
   */
  artifact?: _a2a_v1_Artifact | null;
  /**
   * Whether this should be appended to a prior one produced
   */
  append?: boolean;
  /**
   * Whether this represents the last part of an artifact
   */
  last_chunk?: boolean;
  /**
   * Optional metadata associated with the artifact update.
   */
  metadata?: _google_protobuf_Struct | null;
}

/**
 * --8<-- [start:TaskArtifactUpdateEvent]
 * TaskArtifactUpdateEvent represents a task delta where an artifact has
 * been generated.
 */
export interface TaskArtifactUpdateEvent__Output {
  /**
   * The id of the task for this artifact
   */
  task_id: string;
  /**
   * The id of the context that this task belongs too
   */
  context_id: string;
  /**
   * The artifact itself
   */
  artifact: _a2a_v1_Artifact__Output | null;
  /**
   * Whether this should be appended to a prior one produced
   */
  append: boolean;
  /**
   * Whether this represents the last part of an artifact
   */
  last_chunk: boolean;
  /**
   * Optional metadata associated with the artifact update.
   */
  metadata: _google_protobuf_Struct__Output | null;
}
// Original file: ../specification/grpc/a2a.proto

import type {
  PushNotificationConfig as _a2a_v1_PushNotificationConfig,
  PushNotificationConfig__Output as _a2a_v1_PushNotificationConfig__Output,
} from "../src/types/a2a/v1/PushNotificationConfig";

/**
 * --8<-- [start:TaskPushNotificationConfig]
 */
export interface TaskPushNotificationConfig {
  /**
   * The resource name of the config.
   * Format: tasks/{task_id}/pushNotificationConfigs/{config_id}
   */
  name?: string;
  /**
   * The push notification configuration details.
   */
  push_notification_config?: _a2a_v1_PushNotificationConfig | null;
}

/**
 * --8<-- [start:TaskPushNotificationConfig]
 */
export interface TaskPushNotificationConfig__Output {
  /**
   * The resource name of the config.
   * Format: tasks/{task_id}/pushNotificationConfigs/{config_id}
   */
  name: string;
  /**
   * The push notification configuration details.
   */
  push_notification_config: _a2a_v1_PushNotificationConfig__Output | null;
}
// Original file: ../specification/grpc/a2a.proto

/**
 * --8<-- [start:TaskState]
 * The set of states a Task can be in.
 */
export const TaskState = {
  TASK_STATE_UNSPECIFIED: "TASK_STATE_UNSPECIFIED",
  /**
   * Represents the status that acknowledges a task is created
   */
  TASK_STATE_SUBMITTED: "TASK_STATE_SUBMITTED",
  /**
   * Represents the status that a task is actively being processed
   */
  TASK_STATE_WORKING: "TASK_STATE_WORKING",
  /**
   * Represents the status a task is finished. This is a terminal state
   */
  TASK_STATE_COMPLETED: "TASK_STATE_COMPLETED",
  /**
   * Represents the status a task is done but failed. This is a terminal state
   */
  TASK_STATE_FAILED: "TASK_STATE_FAILED",
  /**
   * Represents the status a task was cancelled before it finished.
   * This is a terminal state.
   */
  TASK_STATE_CANCELLED: "TASK_STATE_CANCELLED",
  /**
   * Represents the status that the task requires information to complete.
   * This is an interrupted state.
   */
  TASK_STATE_INPUT_REQUIRED: "TASK_STATE_INPUT_REQUIRED",
  /**
   * Represents the status that the agent has decided to not perform the task.
   * This may be done during initial task creation or later once an agent
   * has determined it can't or won't proceed. This is a terminal state.
   */
  TASK_STATE_REJECTED: "TASK_STATE_REJECTED",
  /**
   * Represents the state that some authentication is needed from the upstream
   * client. Authentication is expected to come out-of-band thus this is not
   * an interrupted or terminal state.
   */
  TASK_STATE_AUTH_REQUIRED: "TASK_STATE_AUTH_REQUIRED",
} as const;

/**
 * --8<-- [start:TaskState]
 * The set of states a Task can be in.
 */
export type TaskState =
  | "TASK_STATE_UNSPECIFIED"
  | 0
  /**
   * Represents the status that acknowledges a task is created
   */
  | "TASK_STATE_SUBMITTED"
  | 1
  /**
   * Represents the status that a task is actively being processed
   */
  | "TASK_STATE_WORKING"
  | 2
  /**
   * Represents the status a task is finished. This is a terminal state
   */
  | "TASK_STATE_COMPLETED"
  | 3
  /**
   * Represents the status a task is done but failed. This is a terminal state
   */
  | "TASK_STATE_FAILED"
  | 4
  /**
   * Represents the status a task was cancelled before it finished.
   * This is a terminal state.
   */
  | "TASK_STATE_CANCELLED"
  | 5
  /**
   * Represents the status that the task requires information to complete.
   * This is an interrupted state.
   */
  | "TASK_STATE_INPUT_REQUIRED"
  | 6
  /**
   * Represents the status that the agent has decided to not perform the task.
   * This may be done during initial task creation or later once an agent
   * has determined it can't or won't proceed. This is a terminal state.
   */
  | "TASK_STATE_REJECTED"
  | 7
  /**
   * Represents the state that some authentication is needed from the upstream
   * client. Authentication is expected to come out-of-band thus this is not
   * an interrupted or terminal state.
   */
  | "TASK_STATE_AUTH_REQUIRED"
  | 8;

/**
 * --8<-- [start:TaskState]
 * The set of states a Task can be in.
 */
export type TaskState__Output = (typeof TaskState)[keyof typeof TaskState];
// Original file: ../specification/grpc/a2a.proto

import type {
  TaskState as _a2a_v1_TaskState,
  TaskState__Output as _a2a_v1_TaskState__Output,
} from "../src/types/a2a/v1/TaskState";
import type {
  Message as _a2a_v1_Message,
  Message__Output as _a2a_v1_Message__Output,
} from "../src/types/a2a/v1/Message";
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output,
} from "../src/types/google/protobuf/Timestamp";

/**
 * --8<-- [start:TaskStatus]
 * A container for the status of a task
 */
export interface TaskStatus {
  /**
   * The current state of this task
   */
  state?: _a2a_v1_TaskState;
  /**
   * A message associated with the status.
   */
  update?: _a2a_v1_Message | null;
  /**
   * Timestamp when the status was recorded.
   * Example: "2023-10-27T10:00:00Z"
   */
  timestamp?: _google_protobuf_Timestamp | null;
}

/**
 * --8<-- [start:TaskStatus]
 * A container for the status of a task
 */
export interface TaskStatus__Output {
  /**
   * The current state of this task
   */
  state: _a2a_v1_TaskState__Output;
  /**
   * A message associated with the status.
   */
  update: _a2a_v1_Message__Output | null;
  /**
   * Timestamp when the status was recorded.
   * Example: "2023-10-27T10:00:00Z"
   */
  timestamp: _google_protobuf_Timestamp__Output | null;
}
// Original file: ../specification/grpc/a2a.proto

import type {
  TaskStatus as _a2a_v1_TaskStatus,
  TaskStatus__Output as _a2a_v1_TaskStatus__Output,
} from "../src/types/a2a/v1/TaskStatus";
import type {
  Struct as _google_protobuf_Struct,
  Struct__Output as _google_protobuf_Struct__Output,
} from "../src/types/google/protobuf/Struct";

/**
 * --8<-- [start:TaskStatusUpdateEvent]
 * TaskStatusUpdateEvent is a delta even on a task indicating that a task
 * has changed.
 */
export interface TaskStatusUpdateEvent {
  /**
   * The id of the task that is changed
   */
  task_id?: string;
  /**
   * The id of the context that the task belongs to
   */
  context_id?: string;
  /**
   * The new status of the task.
   */
  status?: _a2a_v1_TaskStatus | null;
  /**
   * Whether this is the last status update expected for this task.
   */
  final?: boolean;
  /**
   * Optional metadata to associate with the task update.
   */
  metadata?: _google_protobuf_Struct | null;
}

/**
 * --8<-- [start:TaskStatusUpdateEvent]
 * TaskStatusUpdateEvent is a delta even on a task indicating that a task
 * has changed.
 */
export interface TaskStatusUpdateEvent__Output {
  /**
   * The id of the task that is changed
   */
  task_id: string;
  /**
   * The id of the context that the task belongs to
   */
  context_id: string;
  /**
   * The new status of the task.
   */
  status: _a2a_v1_TaskStatus__Output | null;
  /**
   * Whether this is the last status update expected for this task.
   */
  final: boolean;
  /**
   * Optional metadata to associate with the task update.
   */
  metadata: _google_protobuf_Struct__Output | null;
}
// Original file: ../specification/grpc/a2a.proto

/**
 * --8<-- [start:TaskResubscriptionRequest]
 */
export interface TaskSubscriptionRequest {
  /**
   * The resource name of the task to subscribe to.
   * Format: tasks/{task_id}
   */
  name?: string;
}

/**
 * --8<-- [start:TaskResubscriptionRequest]
 */
export interface TaskSubscriptionRequest__Output {
  /**
   * The resource name of the task to subscribe to.
   * Format: tasks/{task_id}
   */
  name: string;
}
// Original file: ../specification/grpc/a2a.proto

import type {
  TaskStatus as _a2a_v1_TaskStatus,
  TaskStatus__Output as _a2a_v1_TaskStatus__Output,
} from "../src/types/a2a/v1/TaskStatus";
import type {
  Artifact as _a2a_v1_Artifact,
  Artifact__Output as _a2a_v1_Artifact__Output,
} from "../src/types/a2a/v1/Artifact";
import type {
  Message as _a2a_v1_Message,
  Message__Output as _a2a_v1_Message__Output,
} from "../src/types/a2a/v1/Message";
import type {
  Struct as _google_protobuf_Struct,
  Struct__Output as _google_protobuf_Struct__Output,
} from "../src/types/google/protobuf/Struct";

/**
 * --8<-- [start:Task]
 * Task is the core unit of action for A2A. It has a current status
 * and when results are created for the task they are stored in the
 * artifact. If there are multiple turns for a task, these are stored in
 * history.
 */
export interface Task {
  /**
   * Unique identifier (e.g. UUID) for the task, generated by the server for a
   * new task.
   */
  id?: string;
  /**
   * Unique identifier (e.g. UUID) for the contextual collection of interactions
   * (tasks and messages). Created by the A2A server.
   */
  context_id?: string;
  /**
   * The current status of a Task, including state and a message.
   */
  status?: _a2a_v1_TaskStatus | null;
  /**
   * A set of output artifacts for a Task.
   */
  artifacts?: _a2a_v1_Artifact[];
  /**
   * protolint:disable REPEATED_FIELD_NAMES_PLURALIZED
   * The history of interactions from a task.
   */
  history?: _a2a_v1_Message[];
  /**
   * protolint:enable REPEATED_FIELD_NAMES_PLURALIZED
   * A key/value object to store custom metadata about a task.
   */
  metadata?: _google_protobuf_Struct | null;
}

/**
 * --8<-- [start:Task]
 * Task is the core unit of action for A2A. It has a current status
 * and when results are created for the task they are stored in the
 * artifact. If there are multiple turns for a task, these are stored in
 * history.
 */
export interface Task__Output {
  /**
   * Unique identifier (e.g. UUID) for the task, generated by the server for a
   * new task.
   */
  id: string;
  /**
   * Unique identifier (e.g. UUID) for the contextual collection of interactions
   * (tasks and messages). Created by the A2A server.
   */
  context_id: string;
  /**
   * The current status of a Task, including state and a message.
   */
  status: _a2a_v1_TaskStatus__Output | null;
  /**
   * A set of output artifacts for a Task.
   */
  artifacts: _a2a_v1_Artifact__Output[];
  /**
   * protolint:disable REPEATED_FIELD_NAMES_PLURALIZED
   * The history of interactions from a task.
   */
  history: _a2a_v1_Message__Output[];
  /**
   * protolint:enable REPEATED_FIELD_NAMES_PLURALIZED
   * A key/value object to store custom metadata about a task.
   */
  metadata: _google_protobuf_Struct__Output | null;
}
